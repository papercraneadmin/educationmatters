import * as React from "react";
import * as Types from "./types";

declare function CenteredCta(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  linkButtonFilledText?: React.ReactNode;
  linkButtonFilledLink?: Types.Basic.Link;
  linkButtonFilledOptionsVariant?: "Red" | "Blue" | "Yellow" | "Secondary";
}): React.JSX.Element;
