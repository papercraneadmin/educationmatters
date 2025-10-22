import * as React from "react";
import * as Types from "./types";

declare function AccessibleModal(props: {
  as?: React.ElementType;
  modalTitleDashSeparated?: Types.Builtin.Text;
  ariaDescription?: React.ReactNode;
  modalDescription?: Types.Builtin.Text;
  slotContent?: Types.Slots.SlotContent;
  openOrClosed?: Types.Builtin.Text;
}): React.JSX.Element;
