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
  useEffect(() => {
    if (isFilterTypeSearchIn(filterType)) {
      let tempOption: string;
      tempOption =
        option == "Everything"
          ? FilterCategories.EVERYTHING
          : FilterCategories.TOP_HEADLINES;
      tempOption == filtersCategory
        ? setIsSelected(true)
        : setIsSelected(false);
    } else {
      const optionSelected =
        filtersState[filtersCategory][filterType].selectedOptions;
      optionSelected == option ? setIsSelected(true) : setIsSelected(false);
    }
  });

  const isFilterTypeSearchIn = (filterType: string) => {
    if (filterType === FilterSubCategories.SEARCH_IN) {
      return true;
    } else {
      return false;
    }
  };

  const sendFiltersCurrentCategoryToStore = (
    selectedOption: string | undefined
  ) => {
    selectedOption == "Everything"
      ? (selectedOption = FilterCategories.EVERYTHING)
      : (selectedOption = FilterCategories.TOP_HEADLINES);
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
      sendFiltersCurrentCategoryToStore(selectedOption);
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
    isSelected
      ? removeSelectedOptionFromStore(filterType)
      : sendSelectedOptionToStore(filterType, selectedOption);
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
