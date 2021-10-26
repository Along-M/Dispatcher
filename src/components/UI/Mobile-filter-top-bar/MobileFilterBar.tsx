import { useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../assets/icons/filter.svg";
import {
  MobileFilterBarText,
  DropdownArrowIcon,
  FilterIcon,
  SortByContainer,
} from "./style";

export interface MobileFilterBarProps {
  dropDownOptions?: string[];
  children?: React.ReactChild | React.ReactChild[];
  variant?: string;
}

const MobileFilterBar = ({
  children,
  dropDownOptions,
  variant,
}: MobileFilterBarProps) => {
  return (
    <>
      <SortByContainer>
        <MobileFilterBarText>Sort by</MobileFilterBarText>
        <DropdownArrowIcon src={DropdownArrow} />
      </SortByContainer>
      <FilterIcon src={FiltersIcon} />
    </>
  );
};

export default MobileFilterBar;
