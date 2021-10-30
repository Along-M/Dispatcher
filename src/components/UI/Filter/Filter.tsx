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
  // variant: string;
}

const Filter = ({ children, type, dropDownOptions }: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  // const options = dropDownOptions?.map((option) => {
  //   return <Option>{option}</Option>;
  // });
  return (
    <FilterCointainer className={type + "-container"}>
      <DropdownSelect
        onClick={toggleFilterOptions}
        className={type + "-drop-down"}
      >
        <FilterHeader className={type + "-header"}>{children}</FilterHeader>
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && (
        <OptionsContainer className="option-container">
          <Option>Top Headlines</Option>
          <Option>Everything</Option>
        </OptionsContainer>
      )}
    </FilterCointainer>
  );
};

export default Filter;
