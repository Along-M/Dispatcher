import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import { FilterCategories } from "../types";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
} from "./style";

export interface FilterProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  type?: FilterCategories;
  variant: string;
}

const Filter = ({ children, type, dropDownOptions, variant }: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  // const options = dropDownOptions?.map((option) => {
  //   return <Option>{option}</Option>;
  // });
  return (
    <FilterCointainer className={variant + "-container"}>
      <DropdownSelect onClick={toggleFilterOptions} className={variant}>
        <FilterHeader className={variant + "-header"}>{type}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && (
        <OptionsContainer className="option-container">
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
          <Option>audi</Option>
        </OptionsContainer>
      )}
    </FilterCointainer>
  );
};

export default Filter;
