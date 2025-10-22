"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LinkButtonHollow } from "./LinkButtonHollow";
import * as _utils from "./utils";
import _styles from "./CtaSection.module.css";

export function CtaSection({
  as: _Component = _Builtin.Section,
  title = "Opening doors through Student Awards",
  text = "Student awards do more than recognize achievement—they open doors. Whether it’s helping with tuition, boosting confidence, or encouraging a student to keep going, these awards can change the course of a student's life and help them reach their full potential.",
  linkButtonHollowText = "Learn more about student awards",

  linkButtonHollowLink = {
    href: "#",
  },

  linkButtonHollowVariant = null,
  image = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d66_c2951ac5f5a7c66eac9f024abee2ba9527569b5a.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "hero")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "home-hero")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "splitter")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "hero", "max-w-33")}
            tag="div"
            data-stagger="true"
          >
            <_Builtin.Heading tag="h2">{title}</_Builtin.Heading>
            <_Builtin.Paragraph>{text}</_Builtin.Paragraph>
            <LinkButtonHollow
              text={linkButtonHollowText}
              link={linkButtonHollowLink}
              variant={linkButtonHollowVariant}
            />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "col")} tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "hero-bg")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "hero-img")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "f-w-overlay")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
