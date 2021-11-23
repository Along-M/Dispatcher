import Button from "../../Button/Button";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useRef, useState } from "react";
import MobileFilterOptions from "../mobile-filter-options/MobileFilterOptions";
import { SearchInFilter } from "../../../../types/filterTypes copy";
import { getFilteredDatafromApi } from "../../../../store/data-actions";
import DatePickerOptions from "../../date-picker/DatePicker";
import useClickOutside from "../../../../helpers/custom-hooks/useClickOutside";
import { buildFilterOptions } from "../../../../helpers/helper-functions/helper-functions";

export interface FilterSideBarProps {
  isOpen?: boolean;
  closeFilterSideBar: () => void;
}

const FilterSideBar = ({ isOpen, closeFilterSideBar }: FilterSideBarProps) => {
  const dispatch = useDispatch();
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

  const getFilteredData = () => {
    dispatch(getFilteredDatafromApi());
    closeFilterSideBar();
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
    // console.log("currentFilterType : ", currentFilterType);
    // if (currentFilterType === FilterSubCategories.DATES) {
    //   return <DatePickerOptions isMobile={true} />;
    // }
    let filterOptionToDisplay = buildFilterOptions(option, currentFilterType);
    return (
      <MobileFilterOptions
        key={option + "" + index}
        option={option}
        filterType={currentFilterType}
        filterOptionToDisplay={filterOptionToDisplay}
        filtersCategory={currentFilterCategory}
      ></MobileFilterOptions>
    );
  });

  return (
    <FilterSideBarContainer
      className={isOpen ? "filter-side-bar-open" : "filter-side-bar-closed"}
    >
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
        {isFilterClicked && currentFilterType == FilterSubCategories.DATES && (
          <DatePickerOptions isMobile={true} />
        )}
      </ContentContainer>
      <BtnContainer>
        <Button
          variant={ButtonTypes.VIEW_RESULTS}
          withIcon={false}
          onClick={getFilteredData}
        >
          VIEW RESULTS
        </Button>
      </BtnContainer>
    </FilterSideBarContainer>
  );
};

export default FilterSideBar;
