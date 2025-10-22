import * as React from "react";
import * as Types from "./types";

declare function Popup(props: {
  as?: React.ElementType;
  delaySeconds?: Types.Builtin.Text;
  variant?: "Base" | "No Image";
  slot?: Types.Slots.SlotContent;
  cookieDays?: Types.Builtin.Text;
}): React.JSX.Element;
