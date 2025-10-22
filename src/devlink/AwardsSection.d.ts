import * as React from "react";
import * as Types from "./types";

declare function AwardsSection(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  desktopImage?: Types.Asset.Image;
  mobileImage?: Types.Asset.Image;
  linkButtonHollowText?: React.ReactNode;
  linkButtonHollowLink?: Types.Basic.Link;
}): React.JSX.Element;
