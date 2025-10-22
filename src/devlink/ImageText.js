"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LinkButtonFilled } from "./LinkButtonFilled";
import * as _utils from "./utils";
import _styles from "./ImageText.module.css";

export function ImageText({
  as: _Component = _Builtin.Section,
  image = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d7f_8a277b9ddb64a05f61e86e7b9036465cecc4f428.webp",
  headingTitle = "Latest News",
  headingTitleTag = "h2",
  content = "",
  linkButtonFilledOptionsVariant = null,
  linkButtonFilledText = "Learn more about who we are",

  linkButtonFilledLink = {
    href: "#",
  },

  variant = "Base",
  buttonVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    Reverse: "w-variant-a2d61eb5-a755-fe49-9025-8bac8da4e372",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "splitter-section",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "splitter",
            "img-text",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "flex-1", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "careers-split-img",
                _activeStyleVariant
              )}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={image}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "flex-1",
              "splitter-content",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "split-h", _activeStyleVariant)}
              tag={headingTitleTag}
            >
              {headingTitle}
            </_Builtin.Heading>
            <_Builtin.RichText tag="div" slot="">
              {content}
            </_Builtin.RichText>
            {buttonVisibility ? (
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "button-cont",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <LinkButtonFilled
                  optionsVariant={linkButtonFilledOptionsVariant}
                  text={linkButtonFilledText}
                  link={linkButtonFilledLink}
                />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
