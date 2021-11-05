import { useState } from "react";
import { useDispatch } from "react-redux";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import { FilterCategories } from "../../../types/filterTypes";
import { filterActions } from "../../../store/FiltersSlice";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
} from "./style";

export interface FilterCategoriesProps {
  id: string;
  title: string;
}

const SearchInFilterCategories = ({ id, title }: FilterCategoriesProps) => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterTitle, setTitle] = useState(title);
  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleClick = (event: any, selectedCategory: string) => {
    setTitle(event.target.innerHTML);
    dispatch(
      filterActions.changeFilterGroup({
        filterSelectedCategory: selectedCategory,
      })
    );
  };
  return (
    <FilterCointainer id={id}>
      <DropdownSelect onClick={toggleFilterOptions}>
        <FilterHeader>{filterTitle}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && (
        <OptionsContainer>
          <Option
            onClick={(
              event: any,
              selectedCategory = FilterCategories.TOP_HEADLINES
            ) => handleClick(event, selectedCategory)}
          >
            Top Headlines
          </Option>
          <Option
            onClick={(
              event: any,
              selectedCategory = FilterCategories.EVERYTHING
            ) => handleClick(event, selectedCategory)}
          >
            Everything
          </Option>
        </OptionsContainer>
      )}
    </FilterCointainer>
  );
};

export default SearchInFilterCategories;
