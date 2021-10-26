import { useState } from "react";
import DropdownArrow from "../../assets/icons/dropdown-arrow.svg";
import Button from "../Button/Button";
import { ButtonTypes } from "../types";
import Filter from "../Filter/Filter";
import { FilterCategories } from "../types";
import { FiltersContainer } from "./style";
import MobileFilterBar from "../Mobile-filter-top-bar/MobileFilterBar";

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
      <Filter variant="filter" type={FilterCategories.COUNTRY} />
      <Filter variant="filter" type={FilterCategories.CATEGORY} />
      <Filter variant="filter" type={FilterCategories.SOURCES} />
      <MobileFilterBar />
    </FiltersContainer>
  );
};

export default FilterList;
