import { useEffect, useRef, useState } from "react";
import DropdownArrow from "../../../assets/icons/dropdown-arrow.svg";
import FiltersIcon from "../../../../assets/icons/filter.svg";
import FilterSideBar from "../mobile-filter-sidebar/FilterSideBar";
import Filter from "../../Filter/Filter";
import {
  FilterSubCategories,
  FilterCategories,
} from "../../../../types/filterTypes copy";
import { FilterIcon, FilterTopBarContainer } from "./style";
import { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import useOutsideClick from "../../../../helpers/custom-hooks/useClickOutside";
import { filterSideBarActions } from "../../../../store/filterSideBarSlice";

export interface MobileFilterBarProps {
  openSideBar?: () => void | undefined;
}

const MobileFilterBar = ({ openSideBar }: MobileFilterBarProps) => {
  const filterTypeSortby = useSelector(
    (state: RootState) =>
      state.filters[FilterCategories.EVERYTHING][FilterSubCategories.SORT_BY]
  );
  const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState<any>(false);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  // // Call hook passing in the ref and a function to call on outside click
  // useEffect(() => {
  //   useOutsideClick(ref, () => {
  //     console.log("clicked outside");
  //     setIsFilterSideBarOpen(false);
  //   });
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);
  // useOutsideClick(ref, () => {
  //   console.log("clicked outside");
  //   setIsFilterSideBarOpen(false);
  // });

  const openFiltersSideBar = () => {
    dispatch(filterSideBarActions.openFilterSideBar({}));

    // console.log("inside filter bar:", isFilterSideBarOpen);
    // if (openSideBar) {
    //   openSideBar();
    // }
  };
  const closeFilterSideBar = () => {
    // setIsFilterSideBarOpen(false);
  };
  return (
    // <div className="test" ref={ref}>
    <FilterTopBarContainer>
      <Filter
        filterType={FilterSubCategories.SORT_BY}
        title={filterTypeSortby.title}
        id={filterTypeSortby.id}
        options={filterTypeSortby.options}
        selectedOption={filterTypeSortby.selectedOptions}
      />
      {/* <MobileFilterBarText>Sort by</MobileFilterBarText>
        <DropdownArrowIcon src={DropdownArrow} /> */}
      <FilterIcon src={FiltersIcon} onClick={openFiltersSideBar} />
      {/* <FilterSideBar
          isOpen={isFilterSideBarOpen}
          closeFilterSideBar={closeFilterSideBar}
        /> */}
    </FilterTopBarContainer>
    // </div>
  );
};

export default MobileFilterBar;
