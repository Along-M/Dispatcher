import * as React from "react";
import {
  NoChartDataIcon,
  NoArticalIcon,
  NoDataText,
  Container,
  MainErrorContainer,
  Image,
} from "./style";
import noDatafound from "../../../assets/icons/noDatafound.svg";
import errorIcon from "../../../assets/icons/errorIcon.png";
import noArticalsfound from "../../../assets/icons/noArticalsfound.svg";
import { NoDataFoundTypes } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { transformErrorMessage } from "../../../helpers/helper-functions/helper-functions";
import ErrorModal from "../error-modal/ErrorModal";

export interface NoDataProps {
  type: NoDataFoundTypes;
}

const NoData = ({ type }: NoDataProps) => {
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  const [errMessage, setErrMessage] = useState<string | undefined>();
  // useEffect(() => {
  //   if (dataFromApi?.message) {
  //     const errorMessage = transformErrorMessage(dataFromApi.code);
  //     setErrMessage(errorMessage);
  //   }
  // }, [dataFromApi]);
  return (
    <>
      {type === NoDataFoundTypes.DATACARD && (
        <>
          <NoChartDataIcon src={noDatafound} />
          <NoDataText>No data to display</NoDataText>
        </>
      )}
      {type === NoDataFoundTypes.ARTICALCARD && (
        <>
          <NoArticalIcon src={noArticalsfound} />
          <NoDataText>We couldn’t find any matches for your query</NoDataText>
        </>
      )}

      {/* {dataFromApi?.status === "error" && (
        <ErrorModal message={errMessage} title={"Error"} />
      )} */}
    </>
  );
};

export default NoData;
