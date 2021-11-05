import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../../types/filterTypes";
import { FilterCointainer, FilterHeader, FilterSelectedOptions } from "./style";

export interface SearchInFilterProps {
  title: string;
  id: string;
  selectedOption: string | null;
  filterType: FilterSubCategories;
  filterClickHandler: (filterType: FilterSubCategories) => void;
}

const SearchInFilter = ({
  title,
  selectedOption,
  filterClickHandler,
  filterType,
}: SearchInFilterProps) => {
  // const handleSelectedOption = (selectedOption: string | null) => {
  switch (selectedOption) {
    case FilterCategories.TOP_HEADLINES:
      selectedOption = "Top-headlines";
      break;
    default:
      selectedOption = "Everything";
  }
  // };
  // useEffect(() => {
  // handleSelectedOption(selectedOption);
  // });

  return (
    <FilterCointainer onClick={() => filterClickHandler(filterType)}>
      <FilterHeader>{title}</FilterHeader>
      <FilterSelectedOptions>{selectedOption}</FilterSelectedOptions>
    </FilterCointainer>
  );
};

export default SearchInFilter;
