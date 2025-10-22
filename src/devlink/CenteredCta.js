"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LinkButtonFilled } from "./LinkButtonFilled";
import * as _utils from "./utils";
import _styles from "./CenteredCta.module.css";

export function CenteredCta({
  as: _Component = _Builtin.Section,
  title = "Need Help with Awards?",
  linkButtonFilledText = "see all faqs",

  linkButtonFilledLink = {
    href: "#",
  },

  linkButtonFilledOptionsVariant = null,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "centered")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "blue-text")} tag="h2">
          {title}
        </_Builtin.Heading>
        <LinkButtonFilled
          text={linkButtonFilledText}
          optionsVariant={linkButtonFilledOptionsVariant}
          link={linkButtonFilledLink}
        />
      </_Builtin.Block>
    </_Component>
  );
}
