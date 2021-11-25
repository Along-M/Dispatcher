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
  const [minDate, setminDate] = useState<Date>();
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    let minDate = new Date().setMonth(new Date().getMonth() - 1);
    const date = new Date(minDate);
    setminDate(date);
  }, []);

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

  console.log(filtersState);
  const onChange = (dates: any) => {
    console.log("somethis is wrong");
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  console.log("NEW DARTE", new Date());
  var d = new Date();
  new Date().setMonth(new Date().getMonth() - 3);

  return (
    // <DateOptionsContainer
    //   className={isMobile ? "mobile-date-picker" : "desktop-date-picker"}
    // >
    <div className={isMobile ? "mobile-date" : undefined}>
      <DatePicker
        // className={isMobile ? "" : "date-picker-secondary-conmtainer"}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        isClearable={true}
        minDate={minDate}
        // maxDate={new Date(), 5}
        showDisabledMonthNavigation
      />
    </div>
    // </DateOptionsContainer>
  );
};

export default DatePickerOptions;
