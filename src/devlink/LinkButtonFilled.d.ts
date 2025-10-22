import * as React from "react";
import * as Types from "./types";

declare function LinkButtonFilled(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  descriptiveLabel?: Types.Builtin.Text;
  optionsOpenDefaultModal?: Types.Builtin.Text;
  optionsIconVisibility?: Types.Visibility.VisibilityConditions;
  optionsMarginTop?: Types.Builtin.Text;
  optionsVariant?: "Red" | "Blue" | "Yellow" | "Secondary";
  buttonArrowIconArrowVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
