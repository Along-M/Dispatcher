import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store/FiltersSlice";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import { FilterSubCategories } from "../../../types/filterTypes";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
} from "./style";

export interface FilterProps {
  title: string;
  id: string;
  options: string[];
  selectedOption: string | null;
  type: FilterSubCategories;
}

const Filter = ({ title, id, options, selectedOption, type }: FilterProps) => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const optionClickHandler = () => {};

  const optionsList = options?.map((option) => {
    return <Option onClick={() => optionClickHandler}>{option}</Option>;
  });
  return (
    <FilterCointainer id={id}>
      <DropdownSelect onClick={toggleFilterDropdown}>
        <FilterHeader>{selectedOption ? selectedOption : title}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && <OptionsContainer>{optionsList}</OptionsContainer>}
    </FilterCointainer>
  );
};

export default Filter;
