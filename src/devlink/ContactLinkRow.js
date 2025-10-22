"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ContactLinkRow.module.css";

export function ContactLinkRow({
  as: _Component = _Builtin.Link,
  faIcon = "",
  text = "hello@email.com",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "contact__link-row")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "fa", "contact-link__fa")}
        tag="div"
      >
        {faIcon}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "contact__link-text")}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  );
}
