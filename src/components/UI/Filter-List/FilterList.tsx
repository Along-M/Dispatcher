import { useState } from "react";
import DropdownArrow from "../../assets/icons/dropdown-arrow.svg";
import Button from "../button/Button";
import { ButtonTypes } from "../types";
import Filter from "../filter/Filter";
import { FilterCategories } from "../types";
import { FiltersContainer } from "./style";
// import MobileFilterBar from "../mobile-filter-top-bar/MobileFilterBar";
import MobileFilterBar from "../tablet and mobile/mobile-filter-top-bar/MobileFilterBar";

export interface FilterListProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
  variant?: string;
}

const FilterList = ({
  children,
  type,
  dropDownOptions,
  variant,
}: FilterListProps) => {
  return (
    <FiltersContainer>
      <Filter type={FilterCategories.COUNTRY}>Country</Filter>
      <Filter type={FilterCategories.CATEGORY}>Category</Filter>
      <Filter type={FilterCategories.SOURCES}>Sources</Filter>
    </FiltersContainer>
  );
};

export default FilterList;
