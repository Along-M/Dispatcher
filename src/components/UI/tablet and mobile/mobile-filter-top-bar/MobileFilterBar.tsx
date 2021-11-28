import { useEffect, useRef, useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../../assets/icons/filter.svg";
import SelectedFiltersIcon from "../../../../assets/icons/selectedfilters.svg";
import SelectedFiltersIconmarker from "../../../../assets/icons/asterisk.svg";
import FilterSideBar from "../mobile-filter-sidebar/FilterSideBar";
import Filter from "../../Filter/Filter";
import {
  FilterSubCategories,
  FilterCategories,
} from "../../../../types/filterTypes copy";
import { FilterIcon, FilterTopBarContainer, SortBySpan } from "./style";
import { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import useOutsideClick from "../../../../helpers/custom-hooks/useClickOutside";
import { filterSideBarActions } from "../../../../store/filterSideBarSlice";

export interface MobileFilterBarProps {
  openSideBar?: () => void | undefined;
}

const MobileFilterBar = ({ openSideBar }: MobileFilterBarProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const filterCurrentCategory = useSelector(
    (state: RootState) => state.filters.FilterGroupState
  );
  const filterCurrentState = filtersState[filterCurrentCategory];
  const [isActiveFilters, setisActiveFilters] = useState<boolean>(false);
  const [isDisabled, setIsdisabled] = useState<boolean>(false);
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState<any>(false);

  const filterTypeSortby = useSelector(
    (state: RootState) =>
      state.filters[FilterCategories.EVERYTHING][FilterSubCategories.SORT_BY]
  );
  const isMobile = useSelector((state: RootState) => state.isMobile);

  useEffect(() => {
    if (filterCurrentCategory == FilterCategories.TOP_HEADLINES) {
      filterCurrentState[FilterSubCategories.COUNTRY].selectedOptions !== "" ||
      filterCurrentState[FilterSubCategories.CATEGORY].selectedOptions !== "" ||
      filterCurrentState[FilterSubCategories.SOURCES].selectedOptions !== ""
        ? setisActiveFilters(true)
        : setisActiveFilters(false);
    } else if (filterCurrentCategory == FilterCategories.EVERYTHING) {
      filterCurrentState[FilterSubCategories.DATES].selectedOptions !== "" ||
      filterCurrentState[FilterSubCategories.LANGUAGE].selectedOptions !== "" ||
      filterCurrentState[FilterSubCategories.SOURCES].selectedOptions !== ""
        ? setisActiveFilters(true)
        : setisActiveFilters(false);
    }
  }, [filterCurrentState]);

  useEffect(() => {
    if (
      filterCurrentCategory == FilterCategories.EVERYTHING &&
      filtersState.FreeSearchVal == "" &&
      filtersState[filterCurrentCategory][FilterSubCategories.SOURCES]
        .selectedOptions == ""
    ) {
      setIsdisabled(true);
    } else if (
      filterCurrentCategory == FilterCategories.EVERYTHING &&
      filtersState.FreeSearchVal == "" &&
      filtersState[filterCurrentCategory][FilterSubCategories.SOURCES]
        .selectedOptions !== ""
    ) {
      setIsdisabled(false);
    } else {
      setIsdisabled(false);
    }
  }, [filtersState]);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const openFiltersSideBar = () => {
    dispatch(filterSideBarActions.openFilterSideBar({}));
  };
  const closeFilterSideBar = () => {
    // setIsFilterSideBarOpen(false);
  };

  return (
    <FilterTopBarContainer>
      {isDisabled ||
      filterCurrentCategory == FilterCategories.TOP_HEADLINES ||
      !isMobile.isMobile ? (
        <SortBySpan>Sort-by</SortBySpan>
      ) : (
        <Filter
          filterType={FilterSubCategories.SORT_BY}
          title={filterTypeSortby.title}
          id={filterTypeSortby.id}
          options={filterTypeSortby.options}
          selectedOption={filterTypeSortby.selectedOptions}
        />
      )}
      {!isActiveFilters && (
        <FilterIcon src={FiltersIcon} onClick={openFiltersSideBar} />
      )}
      {isActiveFilters && (
        <FilterIcon src={SelectedFiltersIcon} onClick={openFiltersSideBar} />
      )}
    </FilterTopBarContainer>
  );
};

export default MobileFilterBar;
