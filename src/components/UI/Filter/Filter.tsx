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

export interface FilterProps {
  title: string;
  id: string;
  options: string[];
  selectedOption: string | undefined;
  filterType: FilterSubCategories;
}

const Filter = ({
  title,
  id,
  options,
  selectedOption,
  filterType,
}: FilterProps): JSX.Element => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const filterCurrentCategory = filtersState.FilterGroupState;
  const filterCurrentState = filtersState[filterCurrentCategory];
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterTitle, setfilterTitle] = useState<string>(title);
  let isSelected = false;

  console.log(filterCurrentState);
  useEffect(() => {
    selectedOption ? setfilterTitle(selectedOption) : setfilterTitle(title);
  }, [selectedOption]);

  const toggleFilterDropdown = (): void => {
    setIsFilterOpen(!isFilterOpen);
  };

  const optionClickHandler = (
    event: React.MouseEvent<HTMLElement>,
    selectedOption: string
  ): void => {
    console.log("thi is me in iotuib click handler");
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
  };

  const optionsList = options?.map((option) => {
    selectedOption == option ? (isSelected = true) : (isSelected = false);
    return (
      <Option
        onClick={(
          event: React.MouseEvent<HTMLElement>,
          selectedOption = option
        ) => optionClickHandler(event, selectedOption)}
        className={isSelected ? "selected" : "not-selected"}
      >
        {option}
      </Option>
    );
  });
  return (
    <FilterCointainer id={id}>
      <DropdownSelect onClick={toggleFilterDropdown}>
        {/* <DropdownSelect onClick={toggleFilterDropdown}> */}
        <FilterHeader>{filterTitle}</FilterHeader>
        {filterType !== FilterSubCategories.DATES && (
          <DropdownArrowIcon
            src={DropdownArrow}
            onClick={toggleFilterDropdown}
          />
        )}
        {filterType == FilterSubCategories.DATES && (
          <DropdownDateIcon
            src={DropdownDateArrow}
            onClick={handleDateFilterOptions}
          />
        )}
        {/* {filterType == FilterSubCategories.DATES &&
          selectedOption &&
          !isFilterOpen && (
            <DropdownDateIcon
              src={ClearDateOptionIcon}
              onClick={clearDateOption}
            />
          )} */}
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
