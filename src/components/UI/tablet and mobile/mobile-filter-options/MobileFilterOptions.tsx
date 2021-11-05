import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../../store/FiltersSlice";
import { RootState } from "../../../../store/store";
import {
  FilterCategories,
  FilterSubCategories,
} from "../../../../types/filterTypes";
import { FilterOptionsCointainer, Option } from "./style";
export interface MobileFilterOptionsProps {
  id?: string;
  option: string | undefined;
  filterType: string;
  filtersCategory: string;
  optionSelected?: string;
}

const MobileFilterOptions = ({
  option,
  filterType,
  filtersCategory,
}: MobileFilterOptionsProps) => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const [isSelected, setIsSelected] = useState<boolean | undefined>(undefined);

  console.log(filtersCategory);

  useEffect(() => {
    if (isFilterTypeSearchIn(filterType)) {
      let tempOption: string;
      if (option === "Everything") {
        tempOption = "everything";
      } else {
        tempOption = "topheadlines";
      }
      if (tempOption === filtersCategory) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    } else {
      const optionSelected =
        filtersState[filtersCategory][filterType].selectedOptions;
      if (optionSelected === option) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
    // return () => {
    //   cleanup
    // }
  });

  const isFilterTypeSearchIn = (filterType: string) => {
    if (filterType === FilterSubCategories.SEARCH_IN) {
      return true;
    } else {
      return false;
    }
  };

  const handleTypeSearchInFilterOption = (
    selectedOption: string | undefined
  ) => {
    if (selectedOption == "Everything") {
      selectedOption = FilterCategories.EVERYTHING;
    } else {
      selectedOption = FilterCategories.TOP_HEADLINES;
    }
    dispatch(
      filterActions.changeFilterGroup({
        filterSelectedCategory: selectedOption,
      })
    );
  };
  const sendSelectedOptionToStore = (
    filterType: string,
    selectedOption: string | undefined
  ) => {
    if (isFilterTypeSearchIn(filterType)) {
      handleTypeSearchInFilterOption(selectedOption);
    } else {
      dispatch(
        filterActions.handleSelectedOptions({
          filterSubCategory: filterType,
          selectedOption: selectedOption,
        })
      );
    }
  };

  const removeSelectedOptionFromStore = (filterType: string) => {
    if (isFilterTypeSearchIn(filterType)) {
      return;
    } else {
      dispatch(
        filterActions.clearSelectedOption({
          filterSubCategory: filterType,
        })
      );
    }
  };
  const optionClickHandler = (
    event: any,
    selectedOption: string | undefined
  ) => {
    if (isSelected) {
      removeSelectedOptionFromStore(filterType);
    } else {
      sendSelectedOptionToStore(filterType, selectedOption);
    }
    setIsSelected(!isSelected);
  };

  return (
    <FilterOptionsCointainer
      onClick={(event: any, selectedOption = option) =>
        optionClickHandler(event, selectedOption)
      }
      className={isSelected ? "selected" : "not-selected"}
    >
      <Option id={"option" + option}>{option}</Option>
    </FilterOptionsCointainer>
  );
};

export default MobileFilterOptions;
