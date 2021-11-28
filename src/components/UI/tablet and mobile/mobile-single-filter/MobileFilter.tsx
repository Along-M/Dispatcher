import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { buildFilterOptions } from "../../../../helpers/helper-functions/helper-functions";
import { RootState } from "../../../../store/store";
// import ClearDateOptionIcon from "../../../assets/icons/close.svg";
import ClearDateOptionIcon from "../../../../assets/icons/close.svg";

import {
  FilterCategories,
  FilterSubCategories,
} from "../../../../types/filterTypes copy";
import {
  FilterCointainer,
  FilterHeader,
  FilterSelectedOptions,
  DropdownDateIcon,
} from "./style";

export interface MobileFilterProps {
  title: string;
  id: string;
  options: string[];
  selectedOption: string | null;
  filterType: FilterSubCategories;
  filterClickHandler: (filterType: FilterSubCategories) => void;
}

const MobileFilter = ({
  selectedOption,
  title,
  filterType,
  id,
  filterClickHandler,
}: MobileFilterProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const filterCurrentCategory = filtersState.FilterGroupState;
  const filterCurrentState = filtersState[filterCurrentCategory];
  const [isDisabled, setIsdisabled] = useState<boolean>(false);

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
    if (
      filterCurrentCategory == FilterCategories.EVERYTHING &&
      filterType !== FilterSubCategories.SOURCES &&
      filtersState[FilterCategories.EVERYTHING][FilterSubCategories.SOURCES]
        .selectedOptions == "" &&
      filtersState.FreeSearchVal == ""
    ) {
      setIsdisabled(true);
    } else if (filterCurrentCategory == FilterCategories.EVERYTHING) {
      setIsdisabled(false);
    }
  }, [filtersState]);

  let filterOptionToDisplay;
  if (selectedOption) {
    filterOptionToDisplay = buildFilterOptions(selectedOption, filterType);
  } else {
    filterOptionToDisplay = "All";
  }
  // const selectedFilterOption = selectedOption == "" ? "All" : selectedOption;
  return (
    <FilterCointainer
      id={id}
      onClick={() => filterClickHandler(filterType)}
      className={isDisabled ? "disabled" : "not-disabled"}
    >
      <FilterHeader>{title}</FilterHeader>
      {/* <FilterSelectedOptions>{filterOptionToDisplay}</FilterSelectedOptions> */}
      {/* <div> */}
      <FilterSelectedOptions>{filterOptionToDisplay}</FilterSelectedOptions>
      {/* {selectedOption && filterType == FilterSubCategories.DATES && (
          <DropdownDateIcon
            src={ClearDateOptionIcon}
            // onClick={() => handleDateFilterOptions("CLEAR")}
          />
        )} */}
      {/* </div> */}
    </FilterCointainer>
  );
};

export default MobileFilter;
