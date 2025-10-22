import * as React from "react";
import * as Types from "./types";

declare function ImageText(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  headingTitle?: React.ReactNode;
  headingTitleTag?: Types.Basic.HeadingTag;
  content?: Types.Basic.RichTextChildren;
  linkButtonFilledOptionsVariant?: "Red" | "Blue" | "Yellow" | "Secondary";
  linkButtonFilledText?: React.ReactNode;
  linkButtonFilledLink?: Types.Basic.Link;
  variant?: "Base" | "Reverse";
  buttonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
