"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LinkButtonFilled.module.css";

export function LinkButtonFilled({
  as: _Component = _Builtin.Link,
  text = "Button text",

  link = {
    href: "#",
  },

  descriptiveLabel,
  optionsOpenDefaultModal = "false",
  optionsIconVisibility = true,
  optionsMarginTop,
  optionsVariant = "Red",
  buttonArrowIconArrowVisibility = true,
}) {
  const _styleVariantMap = {
    Red: "",
    Blue: "w-variant-3cab36f5-0373-fe1c-0d23-d0c0c77c2a31",
    Yellow: "w-variant-5c7e5d58-0549-3fa1-ebd4-ff5a1a480d3d",
    Secondary: "w-variant-a9a5f232-3704-5995-87cf-fcae1d273319",
  };

  const _activeStyleVariant = _styleVariantMap[optionsVariant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={false}
      aria-label={descriptiveLabel}
      data-modal-trigger={optionsOpenDefaultModal}
      data-margin-top={optionsMarginTop}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "", "button-text", _activeStyleVariant)}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
