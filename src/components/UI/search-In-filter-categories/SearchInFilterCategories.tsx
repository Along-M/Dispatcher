import { useState } from "react";
import { useDispatch } from "react-redux";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../types/filterTypes";
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
  options: string[];
  filterSubCategory: FilterSubCategories;
}

const SearchInFilterCategories = ({
  id,
  title,
  options,
  filterSubCategory,
}: FilterCategoriesProps) => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterTitle, setTitle] = useState(title);
  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleOptionClick = (event: any, selectedCategory: string) => {
    setTitle(event.target.innerHTML);
    dispatch(
      filterActions.changeFilterGroup({
        filterSelectedCategory: selectedCategory,
      })
    );
  };

  const optionsList = options.map((option) => {
    return (
      <Option
        onClick={(event: any, selectedCategory = option) =>
          handleOptionClick(event, selectedCategory)
        }
      >
        {option}
      </Option>
    );
  });

  return (
    <FilterCointainer id={id}>
      <DropdownSelect onClick={toggleFilterOptions}>
        <FilterHeader>{filterTitle}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && (
        <OptionsContainer onClick={toggleFilterOptions}>
          {optionsList}
          {/* <Option
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
          </Option> */}
        </OptionsContainer>
      )}
    </FilterCointainer>
  );
};

export default SearchInFilterCategories;
