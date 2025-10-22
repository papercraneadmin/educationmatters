"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LinkButtonFilled } from "./LinkButtonFilled";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f1141733-cc93-df8c-4165-779fbab8889f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f1141733-cc93-df8c-4165-779fbab8889f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661791406083},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f1141733-cc93-df8c-4165-779fbab8889f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f1141733-cc93-df8c-4165-779fbab8889f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661791406083},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1a965ebc-4302-2b09-b0fb-75bc93a5bb8c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1a965ebc-4302-2b09-b0fb-75bc93a5bb8c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661791502695},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"af097090-2c5a-2a3b-1ad4-0748216db6ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"af097090-2c5a-2a3b-1ad4-0748216db6ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760479730688},"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"af097090-2c5a-2a3b-1ad4-0748216db6ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"af097090-2c5a-2a3b-1ad4-0748216db6ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760479730688}},"actionLists":{"a-11":{"id":"a-11","title":"Lottie Open","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ham-lottie","selectorGuids":["2d3921ae-f9cf-49a4-79e0-2e2d3f544df0"]},"value":0}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ham-lottie","selectorGuids":["2d3921ae-f9cf-49a4-79e0-2e2d3f544df0"]},"value":50}}]}],"useFirstGroupAsInitialState":true,"createdOn":1661791410267},"a-12":{"id":"a-12","title":"Lottie Close","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".ham-lottie","selectorGuids":["2d3921ae-f9cf-49a4-79e0-2e2d3f544df0"]},"value":50}}]},{"actionItems":[{"id":"a-12-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ham-lottie","selectorGuids":["2d3921ae-f9cf-49a4-79e0-2e2d3f544df0"]},"value":100}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661791410267}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({ as: _Component = _Builtin.Block, variant = "Base" }) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    Invert: "w-variant-d98f4456-caed-8359-f60f-befe649ac3c3",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "nav", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-container", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-brand", "wh", _activeStyleVariant)}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "logo-svg",
              "blk",
              _activeStyleVariant
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d7e_Logo-blk.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "logo-svg",
              "wh",
              _activeStyleVariant
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d60_Logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-links", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"What We Do"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Awards"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"How To Donate"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"FAQs"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Blog"}
          </_Builtin.Link>
          <LinkButtonFilled optionsVariant="Red" text="Donate" />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-ham", _activeStyleVariant)}
          data-w-id="af097090-2c5a-2a3b-1ad4-0748216db6ee"
          tag="div"
        >
          <_Builtin.NotSupported _atom="Animation" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
