import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../store/FiltersSlice";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import { FilterSubCategories } from "../../../types/filterTypes copy";
import {
  FilterCointainer,
  DropdownSelect,
  FilterHeader,
  OptionsContainer,
  DropdownArrowIcon,
  Option,
} from "./style";
import { RootState } from "../../../store/store";

export interface FilterProps {
  title: string;
  id: string;
  options: string[];
  selectedOption: string | undefined;
  filterType: FilterSubCategories;
}

const Filter = ({
  title,
  id,
  options,
  selectedOption,
  filterType,
}: FilterProps): JSX.Element => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const filterCurrentCategory = filtersState.FilterGroupState;
  const filterCurrentState = filtersState[filterCurrentCategory];
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filterTitle, setfilterTitle] = useState<string>(title);
  let isSelected = false;
  useEffect(() => {
    selectedOption ? setfilterTitle(selectedOption) : setfilterTitle(title);
  }, [selectedOption]);

  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const optionClickHandler = (
    event: React.MouseEvent<HTMLElement>,
    selectedOption: string
  ) => {
    console.log("im selected option in sort by : ", selectedOption);
    console.log("im filter type  in sort by : ", filterType);
    console.log("im filter type  in sort by : ", filterType);
    console.log("im selected options in sort by : ", filterCurrentState);
    selectedOption == filterCurrentState[filterType].selectedOptions
      ? dispatch(
          filterActions.clearSelectedOption({
            filterSubCategory: filterType,
            selectedOption: selectedOption,
          })
        )
      : dispatch(
          filterActions.handleSelectedOptions({
            filterSubCategory: filterType,
            selectedOption: selectedOption,
          })
        );
    // dispatch(getFilteredDatafromApi());
  };

  const optionsList = options?.map((option) => {
    selectedOption == option ? (isSelected = true) : (isSelected = false);
    return (
      <Option
        onClick={(
          event: React.MouseEvent<HTMLElement>,
          selectedOption = option
        ) => optionClickHandler(event, selectedOption)}
        className={isSelected ? "selected" : "not-selected"}
      >
        {option}
      </Option>
    );
  });
  return (
    <FilterCointainer id={id}>
      <DropdownSelect onClick={toggleFilterDropdown}>
        <FilterHeader>{filterTitle}</FilterHeader>
        {/* <FilterHeader>{selectedOption ? selectedOption : title}</FilterHeader> */}
        <DropdownArrowIcon src={DropdownArrow} />
      </DropdownSelect>
      {isFilterOpen && <OptionsContainer>{optionsList}</OptionsContainer>}
    </FilterCointainer>
  );
};

export default Filter;
