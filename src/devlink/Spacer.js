"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Spacer.module.css";

export function Spacer({
  as: _Component = _Builtin.Block,
  spacerHeight = "5",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Dark: "w-variant-d20eec58-d61e-cd61-e756-41ad44bf9e57",
    Brand: "w-variant-bcc85fad-9ab5-7810-3116-529eb921607b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "spacer", _activeStyleVariant)}
      tag="div"
      data-height={spacerHeight}
    />
  );
}
