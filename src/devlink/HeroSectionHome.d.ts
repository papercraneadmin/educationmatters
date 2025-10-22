import * as React from "react";
import * as Types from "./types";

declare function HeroSectionHome(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  desktopBg?: Types.Asset.Image;
  mobileBg?: Types.Asset.Image;
}): React.JSX.Element;
