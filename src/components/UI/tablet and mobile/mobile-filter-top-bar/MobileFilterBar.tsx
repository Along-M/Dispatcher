import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../../assets/icons/filter.svg";
import FilterSideBar from "../mobile-filter-sidebar/FilterSideBar";
import Filter from "../../filter/Filter";
import {
  FilterSubCategories,
  FilterCategories,
} from "../../../../types/filterTypes copy";
import { FilterIcon, FilterTopBarContainer } from "./style";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

export interface MobileFilterBarProps {}

const MobileFilterBar = ({}: MobileFilterBarProps) => {
  const filterTypeSortby = useSelector(
    (state: RootState) =>
      state.filters[FilterCategories.EVERYTHING][FilterSubCategories.SORT_BY]
  );
  return (
    <>
      <FilterTopBarContainer>
        <Filter
          filterType={FilterSubCategories.SORT_BY}
          title={filterTypeSortby.title}
          id={filterTypeSortby.id}
          options={filterTypeSortby.options}
          selectedOption={filterTypeSortby.selectedOptions}
        />
        {/* <MobileFilterBarText>Sort by</MobileFilterBarText>
        <DropdownArrowIcon src={DropdownArrow} /> */}
        <FilterIcon src={FiltersIcon} />
        {/* <FilterSideBar /> */}
      </FilterTopBarContainer>
    </>
  );
};

export default MobileFilterBar;
