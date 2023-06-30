import { useDispatch } from "react-redux";
import { filterActions } from "../../store/FiltersSlice";
import { FilterCategories, FilterSubCategories } from "../../types/filterTypes";

const useHandleSelectedOption = (
  filterType: string,
  selectedOption: string | undefined
) => {
  const dispatch = useDispatch();
  switch (filterType) {
    case FilterSubCategories.SEARCH_IN:
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
      break;
    default:
      dispatch(
        filterActions.handleSelectedOptions({
          filterSubCategory: filterType,
          selectedOption: selectedOption,
        })
      );
  }
};

export default useHandleSelectedOption;
