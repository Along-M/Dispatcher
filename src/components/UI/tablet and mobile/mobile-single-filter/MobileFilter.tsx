import { useState } from "react";
import { FilterCointainer, FilterHeader, FilterSelectedOptions } from "./style";

export interface MobileFilterProps {
  title: string;
  selectedOptions?: string[];
}

const MobileFilter = ({ selectedOptions, title }: MobileFilterProps) => {
  const options = selectedOptions ? selectedOptions : "All";
  return (
    <FilterCointainer>
      <FilterHeader>{title}</FilterHeader>
      <FilterSelectedOptions>{options}</FilterSelectedOptions>
    </FilterCointainer>
  );
};

export default MobileFilter;
