import { useSelector, useDispatch } from "react-redux";
import Filter from "../Filter/Filter";
import { FiltersContainer } from "./style";
import { RootState } from "../../../store/store";
import { getFilteredDatafromApi } from "../../../store/data-actions";
import { useEffect } from "react";
import useWindowSize from "../../../helpers/custom-hooks/useWindowSize";
import { defaultUrl } from "../../../helpers/const-helpers/constHelpers";

export interface FilterListProps {
  isInitial: Boolean;
}

const FilterList = ({ isInitial }: FilterListProps): JSX.Element => {
  // const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const currentFilters = filtersState[filtersState.FilterGroupState];
  const windowSize = useWindowSize();
  // const isMobile = windowSize.width <= 1024 ? true : false;

  // useEffect(() => {
  //   console.log("filters listtttttt");
  //   if (!isMobile && !isInitial) {
  //     dispatch(getFilteredDatafromApi());
  //   }
  // }, [filtersState]);
  const currentFilterList = Object.keys(currentFilters).map((currentFilter) => {
    return (
      <Filter
        title={currentFilters[currentFilter].title}
        id={currentFilters[currentFilter].id}
        key={currentFilters[currentFilter].id}
        options={currentFilters[currentFilter].options}
        filterType={currentFilters[currentFilter].filterSubCategory}
        selectedOption={currentFilters[currentFilter].selectedOptions}
      />
    );
  });

  return <FiltersContainer>{currentFilterList}</FiltersContainer>;
};

export default FilterList;
