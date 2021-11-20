import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { DateOptionsContainer } from "./style";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { filterActions } from "../../../store/FiltersSlice";
import { FilterSubCategories } from "../../../types/filterTypes copy";
import { createSelectorCreator } from "reselect";
import "./date-picker.css";
export interface DatePickerProps {
  isMobile?: boolean | undefined;
}

const DatePickerOptions = ({ isMobile }: DatePickerProps): JSX.Element => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      const startingDate = moment(startDate).format("yyyy-MM-DD");
      const endingDate = moment(endDate).format("yyyy-MM-DD");
      const selectedOption = `${startingDate} To ${endingDate}`;
      dispatch(
        filterActions.handleSelectedOptions({
          filterSubCategory: FilterSubCategories.DATES,
          selectedOption: selectedOption,
        })
      );
    }
  }, [startDate, endDate]);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DateOptionsContainer
      className={isMobile ? "mobile-date-picker" : "desktop-date-picker"}
    >
      <DatePicker
        className={"date-picker-secondary-conmtainer"}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        isClearable={true}
      />
    </DateOptionsContainer>
  );
};

export default DatePickerOptions;
