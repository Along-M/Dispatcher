import { title } from "process";
import Button from "../../button/Button";
import MobileFilter from "../mobile-single-filter/MobileFilter";
import { ButtonTypes } from "../../types";
import {
  FilterHeaderContainer,
  FilterSideBarContainer,
  BtnContainer,
  ContentContainer,
} from "./style";

export interface FilterSideBarProps {
  isOpen?: boolean;
}

const FilterSideBar = ({ isOpen }: FilterSideBarProps) => {
  const title = "FILTER";
  return (
    <FilterSideBarContainer>
      <ContentContainer>
        <FilterHeaderContainer>{title}</FilterHeaderContainer>
        <MobileFilter title={"Sources"}></MobileFilter>
      </ContentContainer>
      <BtnContainer>
        <Button variant={ButtonTypes.VIEW_RESULTS} withIcon={false}>
          VIEW RESULTS
        </Button>
      </BtnContainer>
    </FilterSideBarContainer>
  );
};

export default FilterSideBar;
