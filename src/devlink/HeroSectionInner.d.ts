import * as React from "react";
import * as Types from "./types";

declare function HeroSectionInner(props: {
  as?: React.ElementType;
  variant?: "Base" | "White Text";
  title?: React.ReactNode;
  text?: React.ReactNode;
  desktopImage?: Types.Asset.Image;
  mobileImage?: Types.Asset.Image;
  textVisibility?: Types.Visibility.VisibilityConditions;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
