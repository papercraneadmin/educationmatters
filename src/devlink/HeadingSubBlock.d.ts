import * as React from "react";
import * as Types from "./types";

declare function HeadingSubBlock(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  headingType?: Types.Basic.HeadingTag;
  variant?: "Base" | "No Margin";
  textBalance?: Types.Builtin.Text;
}): React.JSX.Element;
