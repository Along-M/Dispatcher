import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../store/FiltersSlice";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import DropdownDateArrow from "../../../assets/icons/date.svg";
import ClearDateOptionIcon from "../../../assets/icons/close.svg";
import { FilterSubCategories } from "../../../types/filterTypes copy";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
  DropdownDateIcon,
} from "./style";
import { RootState } from "../../../store/store";
import DatePickerOptions from "../date-picker/DatePicker";
import { buildFilterOptions } from "../../../helpers/helper-functions/helper-functions";
import { createSelectorCreator } from "reselect";
import { getFilteredDatafromApi } from "../../../store/data-actions";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";

export interface FilterProps {
  title: string;
  id: string;
  options: string[];
  selectedOption: string | undefined;
  filterType: FilterSubCategories;
  disabled?: boolean;
}

const Filter = ({
  title,
  id,
  options,
  selectedOption,
  filterType,
  disabled,
}: FilterProps): JSX.Element => {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const filterCurrentCategory = filtersState.FilterGroupState;
  const filterCurrentState = filtersState[filterCurrentCategory];
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterTitle, setfilterTitle] = useState<string>(title);
  let isSelected = false;
  let filterOption;
  useEffect(() => {
    if (selectedOption) {
      filterOption = buildFilterOptions(selectedOption, filterType);
      setfilterTitle(filterOption);
    } else {
      setfilterTitle(title);
    }
    // selectedOption ? setfilterTitle(selectedOption) : setfilterTitle(title);
  }, [selectedOption]);

  const toggleFilterDropdown = (): void => {
    setIsFilterOpen(!isFilterOpen);
  };

  const optionClickHandler = (
    event: React.MouseEvent<HTMLElement>,
    selectedOption: string
  ): void => {
    selectedOption == filterCurrentState[filterType].selectedOptions
      ? dispatch(
          filterActions.clearSelectedOption({
            filterSubCategory: filterType,
            selectedOption: selectedOption,
          })
        )
      : dispatch(
          filterActions.handleSelectedOptions({
            filterSubCategory: filterType,
            selectedOption: selectedOption,
          })
        );

    if (
      filterType == FilterSubCategories.SORT_BY &&
      selectedOption !== filterCurrentState[filterType].selectedOptions &&
      windowSize.width < 1024
    ) {
      dispatch(getFilteredDatafromApi());
    }
  };

  const handleDateFilterOptions = (): void => {
    if (selectedOption && !isFilterOpen) {
      dispatch(
        filterActions.clearSelectedOption({
          filterSubCategory: filterType,
          // selectedOption: selectedOption,
        })
      );
      // setIsFilterOpen(false);
    }
    toggleFilterDropdown();
  };

  // const filterOptionToDisplay = buildFilterOptions(option, filterType)

  const optionsList = options?.map((option) => {
    let filterOptionToDisplay = buildFilterOptions(option, filterType);
    selectedOption == option ? (isSelected = true) : (isSelected = false);
    // selectedOption == option ? (isSelected = true) : (isSelected = false);
    return (
      <Option
        onClick={(
          event: React.MouseEvent<HTMLElement>,
          selectedOption = option
        ) => optionClickHandler(event, selectedOption)}
        className={isSelected ? "selected" : "not-selected"}
      >
        {filterOptionToDisplay ? filterOptionToDisplay : option}
      </Option>
    );
  });
  return (
    <FilterCointainer
      id={id}
      onClick={toggleFilterDropdown}
      className={disabled ? "disabled" : "not-disabled"}
    >
      <DropdownSelect>
        {/* <DropdownSelect onClick={toggleFilterDropdown}> */}
        <FilterHeader>{filterTitle}</FilterHeader>
        {filterType !== FilterSubCategories.DATES && (
          <DropdownArrowIcon
            src={DropdownArrow}
            // onClick={toggleFilterDropdown}
            // onClick={toggleFilterDropdown}
          />
        )}
        {filterType == FilterSubCategories.DATES && (
          <DropdownDateIcon
            src={DropdownDateArrow}
            onClick={handleDateFilterOptions}
            // onClick={toggleFilterDropdown}
          />
        )}
      </DropdownSelect>
      {isFilterOpen && filterType !== FilterSubCategories.DATES && (
        <OptionsContainer>{optionsList}</OptionsContainer>
      )}
      {isFilterOpen && filterType == FilterSubCategories.DATES && (
        <DatePickerOptions />
      )}
    </FilterCointainer>
  );
};

export default Filter;
