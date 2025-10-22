import * as React from "react";
import * as Types from "./types";

declare function LinkButtonHollow(props: {
  as?: React.ElementType;
  variant?: "White" | "Black" | "Yellow";
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
