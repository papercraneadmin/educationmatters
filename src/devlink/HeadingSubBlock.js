"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeadingSubBlock.module.css";

export function HeadingSubBlock({
  as: _Component = _Builtin.Heading,
  text = "Heading Goes Here",
  headingType = "h2",
  variant = "Base",
  textBalance = "false",
}) {
  const _styleVariantMap = {
    Base: "",
    "No Margin": "w-variant-480ccd7e-cf7d-0b06-71e8-837f9359cd84",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "heading", _activeStyleVariant)}
      tag={headingType}
      data-text-balance={textBalance}
    >
      {text}
    </_Component>
  );
}
