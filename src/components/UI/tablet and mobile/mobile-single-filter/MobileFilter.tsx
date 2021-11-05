import { useState } from "react";
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
  const selectedFilterOption = selectedOption ? selectedOption : "All";

  return (
    <FilterCointainer id={id} onClick={() => filterClickHandler(filterType)}>
      <FilterHeader>{title}</FilterHeader>
      <FilterSelectedOptions>{selectedFilterOption}</FilterSelectedOptions>
    </FilterCointainer>
  );
};

export default MobileFilter;
