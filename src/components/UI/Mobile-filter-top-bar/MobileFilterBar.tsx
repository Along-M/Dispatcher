import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../assets/icons/filter.svg";
import FilterSideBar from "../Filter-side-bar/FilterSideBar";
import Filter from "../Filter/Filter";
import { FilterCategories } from "../types";
import { FilterIcon, FilterTopBarContainer } from "./style";

export interface MobileFilterBarProps {
  dropDownOptions?: string[];
  variant?: string;
}

const MobileFilterBar = ({
  dropDownOptions,
  variant,
}: MobileFilterBarProps) => {
  return (
    <>
      <FilterTopBarContainer>
        <Filter type={FilterCategories.MOBILE_SORT_BY}>Sort by</Filter>
        {/* <MobileFilterBarText>Sort by</MobileFilterBarText>
        <DropdownArrowIcon src={DropdownArrow} /> */}
        <FilterIcon src={FiltersIcon} />
        <FilterSideBar />
      </FilterTopBarContainer>
    </>
  );
};

export default MobileFilterBar;
