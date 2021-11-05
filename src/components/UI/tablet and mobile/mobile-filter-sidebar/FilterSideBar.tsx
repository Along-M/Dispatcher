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
} from "../../../../types/filterTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useState } from "react";
import MobileFilterOptions from "../mobile-filter-options/MobileFilterOptions";

export interface FilterSideBarProps {
  isOpen?: boolean;
}

const FilterSideBar = ({ isOpen }: FilterSideBarProps) => {
  const filters = useSelector((state: RootState) => state.filters);
  const [SideBartitle, setSidebarTitle] = useState<string>("FILTER");
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [currentFilterType, setCurrentFilterType] = useState<string>("");
  const [currentFilterOptions, setcurrentFilterOptions] = useState<string[]>();
  const filterCategory = filters.FilterGroupState;
  const currentFilters = filters[filterCategory];
  // const currentFilters = filters[filters.FilterGroupState];

  const handleReturnToFiltersArrowClick = () => {
    setIsFilterClicked(false);
    setSidebarTitle("FILTER");
  };

  const handleCurrentfilterState = (filterType: FilterSubCategories) => {
    switch (filterType) {
      case FilterSubCategories.SEARCH_IN:
        setcurrentFilterOptions(["Everything", "Top-headlines"]);
        setSidebarTitle(FilterSubCategories.SEARCH_IN);
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
    const filterSubCategory = currentFilters[currentFilter].type;
    if (filterSubCategory === FilterSubCategories.SORT_BY) {
      return;
    }
    return (
      <MobileFilter
        title={currentFilters[currentFilter].title}
        id={currentFilters[currentFilter].id}
        key={currentFilters[currentFilter].id}
        options={currentFilters[currentFilter].options}
        filterType={currentFilters[currentFilter].type}
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
        filtersCategory={filterCategory}
        // optionSelected={currentFilters[currentFilterType].selectedOptions}
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
            title={"Search-in"}
            id={"mobile-search-in-filter"}
            selectedOption={filterCategory}
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
