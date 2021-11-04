import { useSelector } from "react-redux";
import Filter from "../filter/Filter";
import { FiltersContainer } from "./style";
import { RootState } from "../../../store/store";

export interface FilterListProps {}

const FilterList = ({}: FilterListProps) => {
  const filters = useSelector((state: RootState) => state.filters);
  const currentFilters = filters[filters.FilterGroupState];
  const filterLIst = Object.keys(currentFilters).map((currentFilter) => {
    return (
      <Filter
        title={currentFilters[currentFilter].title}
        id={currentFilters[currentFilter].id}
        key={currentFilters[currentFilter].id}
        options={currentFilters[currentFilter].options}
        filterType={currentFilters[currentFilter].type}
        selectedOption={currentFilters[currentFilter].selectedOptions}
      />
    );
  });

  return <FiltersContainer>{filterLIst}</FiltersContainer>;
};

export default FilterList;
