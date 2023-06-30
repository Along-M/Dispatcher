import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export interface ArticalCardListProps {
  props?: JSX.IntrinsicAttributes &
    IContentLoaderProps & { children?: React.ReactNode };
}
const MobileLoader = (
  props?: JSX.IntrinsicAttributes &
    IContentLoaderProps & { children?: React.ReactNode }
) => (
  <ContentLoader
    speed={2}
    width={"85vw"}
    height={"20vh"}
    // viewBox="0 0 320 300"
    backgroundColor="#e8e8e8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="5" rx="20" ry="20" width="100%" height="80" />
    <rect x="0" y="66" rx="0" ry="0" width="100%" height="21" />
    <rect x="0" y="97" rx="0" ry="0" width="100%" height="83" />
  </ContentLoader>
);

export default MobileLoader;
