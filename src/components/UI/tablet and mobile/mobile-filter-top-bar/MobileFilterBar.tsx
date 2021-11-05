import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../../assets/icons/filter.svg";
import FilterSideBar from "../mobile-filter-sidebar/FilterSideBar";
import Filter from "../../filter/Filter";
import { FilterSubCategories } from "../../../../types/filterTypes";
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
        <Filter
          filterType={FilterSubCategories.SORT_BY}
          title={"Sort-by"}
          id={"sort-by-filter"}
          options={["Relevants", "Popularity", "Published-at"]}
          selectedOption={null}
        />
        {/* <MobileFilterBarText>Sort by</MobileFilterBarText>
        <DropdownArrowIcon src={DropdownArrow} /> */}
        <FilterIcon src={FiltersIcon} />
        <FilterSideBar />
      </FilterTopBarContainer>
    </>
  );
};

export default MobileFilterBar;
