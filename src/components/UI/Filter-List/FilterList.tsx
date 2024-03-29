import { useSelector, useDispatch } from "react-redux";
import Filter from "../Filter/Filter";
import { FiltersContainer } from "./style";
import { RootState } from "../../../store/store";
import { getFilteredDatafromApi } from "../../../store/data-actions";
import { useEffect, useState } from "react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import { defaultUrl } from "../../../helpers/const-helpers/constHelpers";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../types/filterTypes copy";

export interface FilterListProps {
  isInitial: Boolean;
}

const FilterList = ({ isInitial }: FilterListProps): JSX.Element => {
  // const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const currentFilters = filtersState[filtersState.FilterGroupState];
  const currentFiltersCategory = filtersState.FilterGroupState;
  const [isDisabled, setIsDisabled] = useState(false);

  const currentFilterList = Object.keys(currentFilters).map((currentFilter) => {
    let filtertype = currentFilters[currentFilter].filterSubCategory;

    return (
      <Filter
        title={currentFilters[currentFilter].title}
        id={currentFilters[currentFilter].id}
        key={currentFilters[currentFilter].id}
        options={currentFilters[currentFilter].options}
        filterType={currentFilters[currentFilter].filterSubCategory}
        selectedOption={currentFilters[currentFilter].selectedOptions}
        disabled={isDisabled}
      />
    );
  });

  return <FiltersContainer>{currentFilterList}</FiltersContainer>;
};

export default FilterList;
