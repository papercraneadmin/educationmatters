"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonArrowIcon } from "./ButtonArrowIcon";
import * as _utils from "./utils";
import _styles from "./NonLinkButton.module.css";

export function NonLinkButton({
  as: _Component = _Builtin.DOM,
  variant = "Base",
  arrowVisibility = true,
  text = "Non-link Button",
  marginTop = "none",
}) {
  const _styleVariantMap = {
    Base: "",
    Secondary: "w-variant-d142d88f-d7eb-f26b-17ee-5e8cea6ccb00",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      tag="button"
      slot=""
      data-margin-top={marginTop}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
      <ButtonArrowIcon arrowVisibility={arrowVisibility} />
    </_Component>
  );
}
