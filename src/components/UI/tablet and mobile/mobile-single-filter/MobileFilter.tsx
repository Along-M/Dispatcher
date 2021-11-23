import { useState } from "react";
import { buildFilterOptions } from "../../../../helpers/helper-functions/helper-functions";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../../types/filterTypes";
import { FilterCointainer, FilterHeader, FilterSelectedOptions } from "./style";

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
  let filterOptionToDisplay;
  if (selectedOption) {
    filterOptionToDisplay = buildFilterOptions(selectedOption, filterType);
  } else {
    filterOptionToDisplay = "All";
  }
  // const selectedFilterOption = selectedOption == "" ? "All" : selectedOption;
  return (
    <FilterCointainer id={id} onClick={() => filterClickHandler(filterType)}>
      <FilterHeader>{title}</FilterHeader>
      <FilterSelectedOptions>{filterOptionToDisplay}</FilterSelectedOptions>
    </FilterCointainer>
  );
};

export default MobileFilter;
