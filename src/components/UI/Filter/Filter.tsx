import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../store/FiltersSlice";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import DropdownDateArrow from "../../../assets/icons/date.svg";
import ClearDateOptionIcon from "../../../assets/icons/close.svg";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../types/filterTypes copy";
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
  const [isDisabled, setIsdisabled] = useState<boolean>(false);
  let isSelected = false;
  let filterOption;

  console.log("this is filter type in date filter:", filterType);
  useEffect(() => {
    if (selectedOption) {
      filterOption = buildFilterOptions(selectedOption, filterType);
      setfilterTitle(filterOption);
    } else {
      setfilterTitle(title);
    }
    // selectedOption ? setfilterTitle(selectedOption) : setfilterTitle(title);
  }, [selectedOption]);

  useEffect(() => {
    if (
      filterCurrentCategory == FilterCategories.TOP_HEADLINES &&
      filterType == FilterSubCategories.SOURCES
    ) {
      filterCurrentState[FilterSubCategories.COUNTRY].selectedOptions !== "" ||
      filterCurrentState[FilterSubCategories.CATEGORY].selectedOptions !== ""
        ? setIsdisabled(true)
        : setIsdisabled(false);
    } else if (
      (filterCurrentCategory == FilterCategories.TOP_HEADLINES &&
        filterType == FilterSubCategories.COUNTRY) ||
      filterType == FilterSubCategories.CATEGORY
    ) {
      filterCurrentState[FilterSubCategories.SOURCES].selectedOptions !== ""
        ? setIsdisabled(true)
        : setIsdisabled(false);
    } else {
      setIsdisabled(false);
    }
  }, [filterCurrentState]);

  useEffect(() => {
    console.log("this is something we have to do");
    if (
      filterCurrentCategory == FilterCategories.EVERYTHING &&
      filterType !== FilterSubCategories.SOURCES &&
      filtersState.FreeSearchVal == ""
    ) {
      setIsdisabled(true);
      // filterCurrentState[FilterSubCategories.COUNTRY].selectedOptions !== "" ||
      // filterCurrentState[FilterSubCategories.CATEGORY].selectedOptions !== ""
      //   ? setIsdisabled(true)
      //   : setIsdisabled(false);
    } else {
      setIsdisabled(false);
    }
    // else if (
    //   (filterCurrentCategory == FilterCategories.TOP_HEADLINES &&
    //     filterType == FilterSubCategories.COUNTRY) ||
    //   filterType == FilterSubCategories.CATEGORY
    // ) {
    //   filterCurrentState[FilterSubCategories.SOURCES].selectedOptions !== ""
    //     ? setIsdisabled(true)
    //     : setIsdisabled(false);
    // } else {
    //   setIsdisabled(false);
    // }
  }, [filtersState]);

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

  const handleDateFilterOptions = (type?: string): void => {
    if (selectedOption && !isFilterOpen) {
      dispatch(
        filterActions.clearSelectedOption({
          filterSubCategory: filterType,
          // selectedOption: selectedOption,
        })
      );
      // setIsFilterOpen(false);
    }
    if (type == "CLEAR") {
      return;
    }
    toggleFilterDropdown();
  };
  console.log("is filter open in date", isFilterOpen);

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
      // onClick={toggleFilterDropdown}
      className={isDisabled ? "disabled" : "not-disabled"}
    >
      <DropdownSelect>
        {/* <DropdownSelect onClick={toggleFilterDropdown}> */}
        <FilterHeader>{filterTitle}</FilterHeader>
        {filterType !== FilterSubCategories.DATES && (
          <DropdownArrowIcon
            src={DropdownArrow}
            onClick={toggleFilterDropdown}
            // onClick={toggleFilterDropdown}
          />
        )}
        {filterType == FilterSubCategories.DATES && !selectedOption && (
          <DropdownDateIcon
            src={DropdownDateArrow}
            onClick={() => handleDateFilterOptions()}
            // onClick={toggleFilterDropdown}
          />
        )}
        {filterType == FilterSubCategories.DATES &&
          selectedOption &&
          isFilterOpen && (
            <DropdownDateIcon
              src={DropdownDateArrow}
              onClick={() => handleDateFilterOptions()}
            />
          )}
        {filterType == FilterSubCategories.DATES &&
          selectedOption &&
          !isFilterOpen && (
            <DropdownDateIcon
              src={ClearDateOptionIcon}
              onClick={() => handleDateFilterOptions("CLEAR")}
            />
          )}
      </DropdownSelect>
      {isFilterOpen && filterType !== FilterSubCategories.DATES && (
        <OptionsContainer>{optionsList}</OptionsContainer>
      )}
      {isFilterOpen && filterType == FilterSubCategories.DATES && (
        <DatePickerOptions />
      )}
      {/* {isDisabled && filterType == FilterSubCategories.SORT_BY && (
        <DatePickerOptions />
      )} */}
    </FilterCointainer>
  );
};

export default Filter;
