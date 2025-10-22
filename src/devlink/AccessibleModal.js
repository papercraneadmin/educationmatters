"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AccessibleModal.module.css";

export function AccessibleModal({
  as: _Component = _Builtin.DOM,
  modalTitleDashSeparated = "Subscribe",
  ariaDescription = "",
  modalDescription,
  slotContent,
  openOrClosed = "closed",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "modal")}
      tag="dialog"
      slot=""
      aria-label={modalTitleDashSeparated}
      aria-description={modalDescription}
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
      _class="modal"
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "close-modal")}
        tag="button"
        slot=""
        aria-label="Close Modal"
      >
        <_Builtin.Block className={_utils.cx(_styles, "fa")} tag="div">
          {"X"}
        </_Builtin.Block>
      </_Builtin.DOM>
      <_Builtin.Block className={_utils.cx(_styles, "modal__inner")} tag="div">
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "is--hidden")}
        value="%3Cstyle%3E%0Ahtml.wf-design-mode%20dialog.modal.modal%20%7B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20position%3A%20relative%3B%0A%7D%0A%0Ahtml.wf-design-mode%20.wf-tag%20%7B%0Adisplay%3Ablock%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20function()%20%7B%0A%20%20const%20modal%20%3D%20document.querySelector('dialog.modal')%3B%0A%20%20const%20openTriggers%20%3D%20document.querySelectorAll('%5Bdata-modal-trigger%3D%22true%22%5D')%3B%0A%20%20const%20closeButton%20%3D%20modal.querySelector('.close-modal%2C%20.stylesheet---default--close-modal')%3B%0A%0A%0A%20%20function%20openModal()%20%7B%0A%20%20%20%20modal.showModal()%3B%0A%20%20%20%20modal.setAttribute('aria-hidden'%2C%20'false')%3B%0A%20%20%20%20document.body.style.overflow%20%3D%20'hidden'%3B%0A%20%20%7D%0A%0A%20%20function%20closeModal()%20%7B%0A%20%20%20%20modal.close()%3B%0A%20%20%20%20modal.setAttribute('aria-hidden'%2C%20'true')%3B%0A%20%20%20%20document.body.style.overflow%20%3D%20''%3B%0A%20%20%7D%0A%0A%20%20openTriggers.forEach(trigger%20%3D%3E%20%7B%0A%20%20%20%20trigger.addEventListener('click'%2C%20function(event)%20%7B%0A%20%20%20%20%20%20event.preventDefault()%3B%0A%20%20%20%20%20%20openModal()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Add%20keyboard%20event%20listener%0A%20%20%20%20trigger.addEventListener('keydown'%2C%20function(event)%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20'Enter'%20%7C%7C%20event.key%20%3D%3D%3D%20'%20')%20%7B%0A%20%20%20%20%20%20%20%20event.preventDefault()%3B%0A%20%20%20%20%20%20%20%20openModal()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%0A%20%20closeButton.addEventListener('click'%2C%20closeModal)%3B%0A%0A%20%20modal.addEventListener('click'%2C%20function(event)%20%7B%0A%20%20%20%20if%20(event.target%20%3D%3D%3D%20modal)%20%7B%0A%20%20%20%20%20%20closeModal()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20document.addEventListener('keydown'%2C%20function(event)%20%7B%0A%20%20%20%20if%20(event.key%20%3D%3D%3D%20'Escape'%20%26%26%20modal.open)%20%7B%0A%20%20%20%20%20%20closeModal()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "_wf-tag")} tag="div">
        <_Builtin.Block tag="div">
          {"Only visible in Webflow - will appear as a modal on the site. "}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
