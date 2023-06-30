import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export interface ArticalCardListProps {
  props?: JSX.IntrinsicAttributes &
    IContentLoaderProps & { children?: React.ReactNode };
}
const MyLoader = (
  props?: JSX.IntrinsicAttributes &
    IContentLoaderProps & { children?: React.ReactNode }
) => (
  <ContentLoader
    speed={2}
    width={501}
    height={100}
    backgroundColor="#e8e8e8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="2" rx="20" ry="20" width="155" height="200" />
    <rect x="194" y="78" rx="10" ry="10" width="200" height="23" />
    <rect x="483" y="23" rx="0" ry="0" width="8" height="0" />
    <rect x="192" y="3" rx="10" ry="10" width="200" height="19" />
    <rect x="459" y="137" rx="20" ry="20" width="242" height="40" />
    <rect x="47" y="2" rx="0" ry="0" width="130" height="200" />
    <rect x="22" y="86" rx="0" ry="0" width="82" height="0" />
    <rect x="191" y="40" rx="10" ry="10" width="300" height="21" />
    <rect x="273" y="48" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
);

export default MyLoader;
