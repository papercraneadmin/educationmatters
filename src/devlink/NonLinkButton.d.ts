import * as React from "react";
import * as Types from "./types";

declare function NonLinkButton(props: {
  as?: React.ElementType;
  variant?: "Base" | "Secondary";
  arrowVisibility?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  marginTop?: Types.Builtin.Text;
}): React.JSX.Element;
