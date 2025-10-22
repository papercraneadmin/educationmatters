"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LinkButtonHollow.module.css";

export function LinkButtonHollow({
  as: _Component = _Builtin.Link,
  variant = "White",
  text = "Donate",

  link = {
    href: "#",
  },
}) {
  const _styleVariantMap = {
    White: "",
    Black: "w-variant-d4d362db-f202-a712-9195-6c50f75719fa",
    Yellow: "w-variant-c9a24f9e-d4c6-c62c-cc62-c6cfa872940f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", "hollow", _activeStyleVariant)}
      button={false}
      aria-label=""
      data-modal-trigger="false"
      data-margin-top=""
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
