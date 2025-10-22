import * as React from "react";
import * as Types from "./types";

declare function ContentSplitter(props: {
  as?: React.ElementType;
  headingSubBlockText?: React.ReactNode;
  headingSubBlockVariant?: "Base" | "No Margin";
  headingSubBlockHeadingType?: Types.Basic.HeadingTag;
  content?: Types.Basic.RichTextChildren;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
