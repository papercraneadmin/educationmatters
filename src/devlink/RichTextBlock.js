"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function RichTextBlock({
  as: _Component = _Builtin.RichText,
  marginTopSmMdLg,
  marginNoneTrueFalse,
  textBalance = "false",
  content = "",
}) {
  return (
    <_Component
      tag="div"
      slot=""
      data-margin-top={marginTopSmMdLg}
      data-no-margin={marginNoneTrueFalse}
      data-text-balance={textBalance}
    >
      {content}
    </_Component>
  );
}
