import * as React from "react";
import * as Types from "./types";

declare function ContactLinkRow(props: {
  as?: React.ElementType;
  faIcon?: React.ReactNode;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
