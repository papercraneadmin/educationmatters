"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroSectionInner.module.css";

export function HeroSectionInner({
  as: _Component = _Builtin.Section,
  variant = "Base",
  title = "We're creating real change for 142,000 students",
  text = "We make exceptional learning experiences possible—programs that spark curiosity, joy, and discovery, and give every student a fair shot at success. These opportunities can change lives for generations. And it’s all possible with your support, and the spirit of generosity in our community.",
  desktopImage = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d79_ce5cbc4fd8f0bf262850c312f554c1d465a8846a.webp",
  mobileImage = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d79_ce5cbc4fd8f0bf262850c312f554c1d465a8846a.webp",
  textVisibility = true,
  slot,
}) {
  const _styleVariantMap = {
    Base: "",
    "White Text": "w-variant-4f6ed31e-5ca8-326e-c67a-45e711416410",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "section", "hero", _activeStyleVariant)}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "home-hero",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "splitter", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "col",
              "hero",
              "max-w-33",
              "black",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Heading tag="h1">{title}</_Builtin.Heading>
            {textVisibility ? (
              <_Builtin.Paragraph>{text}</_Builtin.Paragraph>
            ) : null}
            <_Builtin.NotSupported _atom="Slot" />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", _activeStyleVariant)}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-bg", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "hero-img",
            "desktop",
            _activeStyleVariant
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={desktopImage}
        />
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "hero-img",
            "mobile",
            _activeStyleVariant
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={mobileImage}
        />
      </_Builtin.Block>
    </_Component>
  );
}
