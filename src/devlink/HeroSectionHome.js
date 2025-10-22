"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroSectionHome.module.css";

export function HeroSectionHome({
  as: _Component = _Builtin.Section,
  title = (
    <>
      {"Our students matter."}
      <br />
      {"Our efforts matter."}
      <br />
      {"Your support matters."}
    </>
  ),
  text = "The work we do matters. We can see it and feel it everywhere. It’s the energy in the hallways of our schools. It’s the confidence in our students. It’s the potential reached, and opportunities expanded. From providing warmer clothing and creating more pathways to post-secondary schools to filling backpacks and welcoming newcomers to Canada, together we’re helping all students thrive, and opening more doors on their academic journey. And with your help, you can do more.",
  desktopBg = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d62_7bbd542663d95406967d2596a1d74d7277f61205.webp",
  mobileBg = "https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4da2_97c0badba31a39c4e79b841667c3906cf559f501%20(1).jpg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "home-hero")}
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
            className={_utils.cx(_styles, "col", "home-hero")}
            tag="div"
            data-stagger="true"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "home-hero-sun")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d61_sun.svg"
            />
            <_Builtin.Heading tag="h1">{title}</_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "hero-p")}>
              {text}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "max-w-33")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "home-hero-bg")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "home-hero-img", "desktop")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={desktopBg}
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "home-hero-img", "mobile")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={mobileBg}
        />
      </_Builtin.Block>
    </_Component>
  );
}
