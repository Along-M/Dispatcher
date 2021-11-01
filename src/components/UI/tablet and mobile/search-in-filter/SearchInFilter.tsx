import { FilterCointainer, FilterHeader, FilterSelectedOptions } from "./style";

export interface SearchInFilterProps {
  isOpen?: boolean;
}

const SearchInFilter = ({ isOpen }: SearchInFilterProps) => {
  return (
    <FilterCointainer>
      <FilterHeader>Search in</FilterHeader>
      <FilterSelectedOptions>"Everything"</FilterSelectedOptions>
    </FilterCointainer>
  );
};

export default SearchInFilter;
