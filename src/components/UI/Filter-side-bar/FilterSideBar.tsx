import { title } from "process";
import Button from "../Button/Button";
import { ButtonTypes } from "../types";
import {
  FilterHeaderContainer,
  FilterSideBarContainer,
  BtnContainer,
} from "./style";

export interface FilterSideBarProps {
  isOpen?: boolean;
}

const FilterSideBar = ({ isOpen }: FilterSideBarProps) => {
  const title = "FILTER";
  return (
    <FilterSideBarContainer>
      <FilterHeaderContainer>{title}</FilterHeaderContainer>
      <BtnContainer>
        <Button variant={ButtonTypes.VIEW_RESULTS} withIcon={false}>
          VIEW RESULTS
        </Button>
      </BtnContainer>
    </FilterSideBarContainer>
  );
};

export default FilterSideBar;
