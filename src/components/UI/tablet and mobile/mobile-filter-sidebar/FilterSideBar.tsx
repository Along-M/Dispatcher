import Button from "../../button/Button";
import ArrowLeft from "../../../../assets/icons/ArrowLeft.svg";
import MobileFilter from "../mobile-single-filter/MobileFilter";
import { ButtonTypes } from "../../../../types/types";
import {
  FilterHeaderContainer,
  FilterSideBarContainer,
  BtnContainer,
  ContentContainer,
  ArrowReturnToFilters,
} from "./style";
import MobileSearchInFilter from "../search-in-filter/MobileSearchInFilter";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../../types/filterTypes copy";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useState } from "react";
import MobileFilterOptions from "../mobile-filter-options/MobileFilterOptions";
import { SearchInFilter } from "../../../../types/filterTypes copy";

export interface FilterSideBarProps {
  isOpen?: boolean;
}

const FilterSideBar = ({ isOpen }: FilterSideBarProps) => {
  const filters = useSelector((state: RootState) => state.filters);
  const [SideBartitle, setSidebarTitle] = useState<string>("FILTER");
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [currentFilterType, setCurrentFilterType] = useState<string>("");
  const [currentFilterOptions, setcurrentFilterOptions] = useState<string[]>();
  const currentFilterCategory = filters.FilterGroupState;
  const currentFilters = filters[currentFilterCategory];

  const handleReturnToFiltersArrowClick = () => {
    setIsFilterClicked(false);
    setSidebarTitle("FILTER");
  };

  const handleCurrentfilterState = (filterType: FilterSubCategories) => {
    switch (filterType) {
      case FilterSubCategories.SEARCH_IN:
        setcurrentFilterOptions(SearchInFilter.options);
        setSidebarTitle(SearchInFilter.title);
        break;
      default:
        const currentOptions =
          filters[filters.FilterGroupState][filterType].options;
        const currentSidebarTitle =
          filters[filters.FilterGroupState][filterType].title;
        setcurrentFilterOptions(currentOptions);
        setSidebarTitle(currentSidebarTitle);
    }
  };

  const handleFilterClick = (filterType: FilterSubCategories) => {
    handleCurrentfilterState(filterType);
    setIsFilterClicked(true);
    setCurrentFilterType(filterType);
  };

  const currentFilterList = Object.keys(currentFilters).map((currentFilter) => {
    const filterSubCategory = currentFilters[currentFilter].filterSubCategory;
    if (filterSubCategory === FilterSubCategories.SORT_BY) {
      return;
    }
    return (
      <MobileFilter
        title={currentFilters[currentFilter].title}
        id={currentFilters[currentFilter].id}
        key={currentFilters[currentFilter].id}
        options={currentFilters[currentFilter].options}
        filterType={currentFilters[currentFilter].filterSubCategory}
        selectedOption={currentFilters[currentFilter].selectedOptions}
        filterClickHandler={handleFilterClick}
      />
    );
  });

  const currentOptionsList = currentFilterOptions?.map((option, index) => {
    return (
      <MobileFilterOptions
        key={option + "" + index}
        option={option}
        filterType={currentFilterType}
        filtersCategory={currentFilterCategory}
      ></MobileFilterOptions>
    );
  });

  return (
    <FilterSideBarContainer>
      <ContentContainer>
        <FilterHeaderContainer>
          {isFilterClicked && (
            <ArrowReturnToFilters
              src={ArrowLeft}
              onClick={handleReturnToFiltersArrowClick}
            />
          )}
          {SideBartitle}
        </FilterHeaderContainer>
        {!isFilterClicked && (
          <MobileSearchInFilter
            title={SearchInFilter.title}
            id={SearchInFilter.id}
            selectedOption={currentFilterCategory}
            filterType={FilterSubCategories.SEARCH_IN}
            filterClickHandler={handleFilterClick}
          />
        )}
        {!isFilterClicked && currentFilterList}
        {isFilterClicked && currentOptionsList}
      </ContentContainer>
      <BtnContainer>
        <Button variant={ButtonTypes.VIEW_RESULTS} withIcon={false}>
          VIEW RESULTS
        </Button>
      </BtnContainer>
    </FilterSideBarContainer>
  );
};

export default FilterSideBar;
