import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../../../../helpers/custom-hooks/useWindowSize";
import { RootState } from "../../../../store/store";
import { Idata } from "../../../../types/dataTypes";
import { CardsHeader, CardsNumberOfSearchResults } from "./style";

export interface CardsHeadersProps {
  children?: React.ReactChild | React.ReactChild[];
  totalResults: number | undefined;
  onClick: () => void;
}

const CardsHeaders = ({
  children,
  totalResults,
  onClick,
}: CardsHeadersProps) => {
  // const [isInitial, setisInitial] = useState(true);
  const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
  // const filtersState = useSelector((state: RootState) => state.filters);
  // const isMobile = useSelector((state: RootState) => state.isMobile);
  const initUrl = useSelector((state: RootState) => state.currentURLReducer);
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading
  );
  // const isSearching = filtersState.isFreeSearchActive;
  const windowSize = useWindowSize();
  // console.log("initUrl", initUrl);
  // console.log("is init", dataFromApi);
  // const filtersCurrentState = filtersState[filtersState.FilterGroupState];
  // useEffect(() => {
  //   let filterParams = "";
  //   for (const [key, value] of Object.entries(filtersCurrentState)) {
  //     if (filtersCurrentState[key].selectedOptions !== "") {
  //       filterParams +=
  //         key + "=" + filtersCurrentState[key].selectedOptions + "&";
  //     }
  //   }
  //   // if(filtersState.FreeSearchVal !== )
  //   if (windowSize.width <= 1024 && isMobile.isMobile) {
  //     if (
  //       filterParams !== "" ||
  //       (filtersState.FreeSearchVal !== "" && !isSearching)
  //     ) {
  //       setisInitial(false);
  //     }
  //   } else if (
  //     (windowSize.width > 1024 && filterParams !== "") ||
  //     (filtersState.FreeSearchVal !== "" && !isSearching)
  //   ) {
  //     setisInitial(false);
  //   } else {
  //     setisInitial(false);
  //   }
  // }, [filtersState, isMobile.isMobile, windowSize.width]);

  useEffect(() => {}, []);

  return (
    <>
      {/* {isInitial &&
        dataFromApi?.articles?.length != 0 &&
        dataFromApi?.status !== "error" &&
        !isLoading &&
        windowSize.width > 1024 &&
        !isMobile.isMobile && (
          <CardsNumberOfSearchResults
            className="top-headlines-header"
            onClick={onClick}
          >
            TOP HEADLINES IN ISRAEL
          </CardsNumberOfSearchResults>
        )} */}
      {/* {isInitial &&
        dataFromApi?.articles?.length != 0 &&
        dataFromApi?.status !== "error" &&
        !isLoading &&
        windowSize.width <= 1024 &&
        !isMobile.isMobile && (
          <CardsNumberOfSearchResults
            className="top-headlines-header"
            onClick={onClick}
          >
            TOP HEADLINES IN ISRAEL
          </CardsNumberOfSearchResults>
        )} */}
      {/* 
      {!isInitial &&
        dataFromApi?.totalResults !== 0 &&
        dataFromApi?.status !== "error" &&
        !isLoading &&
        windowSize.width > 1024 &&
        !initUrl.isInitialurl && (
          <CardsNumberOfSearchResults onClick={onClick}>
            {"1 - " +
              dataFromApi?.articles?.length +
              " out of " +
              dataFromApi?.totalResults}{" "}
            results
          </CardsNumberOfSearchResults>
        )} */}
      {dataFromApi?.totalResults !== 0 &&
        dataFromApi?.status !== "error" &&
        !isLoading &&
        !initUrl.isInitialurl && (
          <CardsNumberOfSearchResults onClick={onClick}>
            {"  " +
              dataFromApi?.articles?.length +
              " out of " +
              dataFromApi?.totalResults}{" "}
            results
          </CardsNumberOfSearchResults>
        )}

      {windowSize.width > 1024 && initUrl.isInitialurl && (
        <CardsNumberOfSearchResults
          className="top-headlines-header"
          onClick={onClick}
        >
          Top Headlines in Israel
        </CardsNumberOfSearchResults>
      )}
      {windowSize.width <= 1024 && initUrl.isInitialurl && (
        <CardsNumberOfSearchResults
          className="top-headlines-header"
          onClick={onClick}
        >
          Top Headlines in Israel
        </CardsNumberOfSearchResults>
      )}
      {totalResults === 0 && (
        <CardsNumberOfSearchResults></CardsNumberOfSearchResults>
      )}
      {dataFromApi?.status === "error" && (
        <CardsNumberOfSearchResults></CardsNumberOfSearchResults>
      )}
      {isLoading && <CardsNumberOfSearchResults></CardsNumberOfSearchResults>}
    </>
  );
};

export default CardsHeaders;
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import useWindowSize from "../../../../helpers/custom-hooks/useWindowSize";
// import { RootState } from "../../../../store/store";
// import { Idata } from "../../../../types/dataTypes";
// import { CardsHeader, CardsNumberOfSearchResults } from "./style";

// export interface CardsHeadersProps {
//   children?: React.ReactChild | React.ReactChild[];
//   totalResults: number | undefined;
//   onClick: () => void;
// }

// const CardsHeaders = ({
//   children,
//   totalResults,
//   onClick,
// }: CardsHeadersProps) => {
//   const [isInitial, setisInitial] = useState(true);
//   const dataFromApi = useSelector((state: RootState) => state.dataFromApi.data);
//   const filtersState = useSelector((state: RootState) => state.filters);
//   const isMobile = useSelector((state: RootState) => state.isMobile);
//   const initUrl = useSelector((state: RootState) => state.currentURLReducer);
//   const isLoading = useSelector(
//     (state: RootState) => state.isLoading.isLoading
//   );
//   const isSearching = filtersState.isFreeSearchActive;
//   const windowSize = useWindowSize();
//   // console.log("initUrl", initUrl);
//   // console.log("is init", isInitial);
//   const filtersCurrentState = filtersState[filtersState.FilterGroupState];
//   useEffect(() => {
//     let filterParams = "";
//     for (const [key, value] of Object.entries(filtersCurrentState)) {
//       if (filtersCurrentState[key].selectedOptions !== "") {
//         filterParams +=
//           key + "=" + filtersCurrentState[key].selectedOptions + "&";
//       }
//     }
//     // if(filtersState.FreeSearchVal !== )
//     if (windowSize.width <= 1024 && isMobile.isMobile) {
//       if (
//         filterParams !== "" ||
//         (filtersState.FreeSearchVal !== "" && !isSearching)
//       ) {
//         setisInitial(false);
//       }
//     } else if (
//       (windowSize.width > 1024 && filterParams !== "") ||
//       (filtersState.FreeSearchVal !== "" && !isSearching)
//     ) {
//       setisInitial(false);
//     } else {
//       setisInitial(false);
//     }
//   }, [filtersState, isMobile.isMobile]);

//   return (
//     <>
//       {isInitial &&
//         dataFromApi?.articles?.length != 0 &&
//         dataFromApi?.status !== "error" &&
//         !isLoading &&
//         windowSize.width > 1024 &&
//         !isMobile.isMobile && (
//           <CardsNumberOfSearchResults
//             className="top-headlines-header"
//             onClick={onClick}
//           >
//             TOP HEADLINES IN ISRAEL
//           </CardsNumberOfSearchResults>
//         )}
//       {isInitial &&
//         dataFromApi?.articles?.length != 0 &&
//         dataFromApi?.status !== "error" &&
//         !isLoading &&
//         windowSize.width <= 1024 &&
//         !isMobile.isMobile && (
//           <CardsNumberOfSearchResults
//             className="top-headlines-header"
//             onClick={onClick}
//           >
//             TOP HEADLINES IN ISRAEL
//           </CardsNumberOfSearchResults>
//         )}

//       {!isInitial &&
//         dataFromApi?.totalResults !== 0 &&
//         dataFromApi?.status !== "error" &&
//         !isLoading &&
//         windowSize.width > 1024 &&
//         !initUrl.isInitialurl && (
//           <CardsNumberOfSearchResults onClick={onClick}>
//             {"1 - " +
//               dataFromApi?.articles?.length +
//               " out of " +
//               dataFromApi?.totalResults}{" "}
//             results
//           </CardsNumberOfSearchResults>
//         )}
//       {!isInitial &&
//         dataFromApi?.totalResults !== 0 &&
//         dataFromApi?.status !== "error" &&
//         !isLoading &&
//         windowSize.width <= 1024 &&
//         isMobile.isMobile &&
//         !initUrl.isInitialurl && (
//           <CardsNumberOfSearchResults onClick={onClick}>
//             {"1 - " +
//               dataFromApi?.articles?.length +
//               " out of " +
//               dataFromApi?.totalResults}{" "}
//             results
//           </CardsNumberOfSearchResults>
//         )}

//       {!isInitial && initUrl.isInitialurl && (
//         <CardsNumberOfSearchResults
//           className="top-headlines-header"
//           onClick={onClick}
//         >
//           TOP HEADLINES IN ISRAEL
//         </CardsNumberOfSearchResults>
//       )}
//       {!isInitial && totalResults === 0 && (
//         <CardsNumberOfSearchResults></CardsNumberOfSearchResults>
//       )}
//       {dataFromApi?.status === "error" && (
//         <CardsNumberOfSearchResults></CardsNumberOfSearchResults>
//       )}
//       {isLoading && <CardsNumberOfSearchResults></CardsNumberOfSearchResults>}
//     </>
//   );
// };

// export default CardsHeaders;
