"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonArrowIcon.module.css";

export function ButtonArrowIcon({
  as: _Component = _Builtin.Block,
  arrowVisibility = true,
}) {
  return arrowVisibility ? (
    <_Component className={_utils.cx(_styles, "fa-solid")} tag="div">
      {""}
    </_Component>
  ) : null;
}
