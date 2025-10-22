"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Popup.module.css";

export function Popup({
  as: _Component = _Builtin.Block,
  delaySeconds = "5",
  variant = "Base",
  slot,
  cookieDays = "30",
}) {
  const _styleVariantMap = {
    Base: "",
    "No Image": "w-variant-66f53c9d-00b8-d6b2-3d09-757be213c1dd",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "popup", _activeStyleVariant)}
      tag="div"
      data-delay-seconds={delaySeconds}
      data-cookie-days={cookieDays}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "_wf-tag", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block tag="div">
          {"Only visible in Webflow - will appear as a popup on the site. "}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "popup__inner", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "close-popup", _activeStyleVariant)}
          tag="button"
          slot=""
          aria-label="Close Popup"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "fa", _activeStyleVariant)}
            tag="div"
          >
            {"X"}
          </_Builtin.Block>
        </_Builtin.DOM>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "popup__img-block",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "popup__img", _activeStyleVariant)}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d3d_Depositphotos_357088838_L.webp"
          />
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "popup__overlay", _activeStyleVariant)}
        tag="div"
      />
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.wf-design-mode%20._wf-tag%20%7Bdisplay%3Aflex%20!important%3B%7D%0A%0A.wf-design-mode%20.popup%20%7B%0A%09position%3Arelative%20!important%3B%0A%20%20display%3Aflex%3B%0A%7D%0A%0A.popup--open%20%7Bdisplay%3Aflex%3B%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
