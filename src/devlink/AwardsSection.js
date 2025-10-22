"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LinkButtonHollow } from "./LinkButtonHollow";
import * as _utils from "./utils";
import _styles from "./AwardsSection.module.css";

export function AwardsSection({
  as: _Component = _Builtin.Section,
  title = "Student Awards",
  text = "Student Awards",
  desktopImage = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d63_f9431fb3d0f618dec663071114773f71bb34e95b%20(1).webp",
  mobileImage = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d63_f9431fb3d0f618dec663071114773f71bb34e95b%20(1).webp",
  linkButtonHollowText = "Learn more about student awards",

  linkButtonHollowLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "home-awards")}
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
            className={_utils.cx(_styles, "col", "home-awards")}
            tag="div"
            data-stagger="true"
          >
            <_Builtin.Heading tag="h2">{title}</_Builtin.Heading>
            <_Builtin.Paragraph>{text}</_Builtin.Paragraph>
            <LinkButtonHollow
              text={linkButtonHollowText}
              link={linkButtonHollowLink}
            />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "col")} tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "home-hero-bg")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "home-award-img", "desktop")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={desktopImage}
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "home-award-img", "mobile")}
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
