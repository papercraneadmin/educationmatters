"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { HeadingSubBlock } from "./HeadingSubBlock";
import * as _utils from "./utils";
import _styles from "./ContentSplitter.module.css";

export function ContentSplitter({
  as: _Component = _Builtin.Block,
  headingSubBlockText = "Where We Help",
  headingSubBlockVariant = null,
  headingSubBlockHeadingType = "h2",
  content = "",
  slot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "splitter", "where-top")}
      tag="div"
      data-stagger="true"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "col", "max-w-33")}
        tag="div"
      >
        <HeadingSubBlock
          text={headingSubBlockText}
          variant={headingSubBlockVariant}
          headingType={headingSubBlockHeadingType}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "col")} tag="div">
        <_Builtin.RichText
          className={_utils.cx(_styles, "rte")}
          tag="div"
          slot=""
        >
          {content}
        </_Builtin.RichText>
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
    </_Component>
  );
}
