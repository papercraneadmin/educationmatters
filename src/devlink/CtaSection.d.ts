import * as React from "react";
import * as Types from "./types";

declare function CtaSection(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  linkButtonHollowText?: React.ReactNode;
  linkButtonHollowLink?: Types.Basic.Link;
  linkButtonHollowVariant?: "White" | "Black" | "Yellow";
  image?: Types.Asset.Image;
}): React.JSX.Element;
