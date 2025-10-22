"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LinkButtonHollow } from "./LinkButtonHollow";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-container", "container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "splitter", "footer-splitter", "upper")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "col")} tag="div">
            <_Builtin.Heading tag="h3">{"Make a donation"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                "When you donate to EducationMatters, you’re not just supporting one program or one student—you’re fueling a system of opportunity that reaches across our entire community."
              }
            </_Builtin.Paragraph>
            <LinkButtonHollow text="Donate Today" />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "ack-col")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "acknowledment")}>
              {
                "At EducationMatters we believe that education is the cornerstone of our society. In the spirit of reconciliation, recognizing, and thanking our Indigenous friends and neighbours honours their history and builds the conditions of respect for all peoples. EducationMatters board, staff, and volunteers acknowledge that the land on which we gather is the traditional Treaty 7 territory of the Blackfoot Nations, which include the Siksika, the Piikani, and the Kainai. We also acknowledge the Tsuut’ina and Stoney Nakoda First Nations (including the Chiniki, Bearspaw, and Wesley First Nations).The City of Calgary is also home to Métis Nation of Alberta - Districts 5 and 6. We acknowledge the many First Nations, Métis, and Inuit who have cared for these lands for generations."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "splitter", "footer-splitter")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "col")} tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-brand")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/68f8f908f708b8dc82ee4d06/68f8f908f708b8dc82ee4d64_Logo-white.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "footer-links")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-links-cont")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "bold", "mb-0")}
                >
                  {"Menu"}
                </_Builtin.Paragraph>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"What We Do"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Awards"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"About Us"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "bold", "mb-0")}
                >
                  {"Menu"}
                </_Builtin.Paragraph>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"FAQs"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-socials")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-social-link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.facebook.com/EdMattersYYC/",
                }}
              >
                <_Builtin.DOM
                  tag="svg"
                  slot=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M19.399 0H20.601C25.5118 0 30.1591 2.08902 34.5557 6.26065C37.641 10.008 39.3444 13.3955 39.6529 16.4358C39.8843 17.8692 40 18.7819 40 19.1676V20.8131C40 23.4742 39.0937 26.5531 37.2875 30.0562C34.6521 34.3693 30.8983 37.371 26.0325 39.0487C23.5642 39.6786 21.6359 40 20.241 40H19.7782C14.6746 40 9.94376 37.9431 5.57288 33.8358C1.8512 29.722 0 24.9526 0 19.5147V19.2833C0 19.1033 0.0385666 18.9491 0.1157 18.8205C0.1157 18.7305 0.0771332 18.6855 0 18.6855C0.501366 14.8353 1.52981 11.7242 3.0789 9.34597C5.53431 5.3479 9.32026 2.50683 14.4368 0.816326C16.3458 0.276394 18.0042 0 19.399 0ZM16.6865 12.772L16.8022 16.4358C16.8022 16.5515 16.6865 16.6736 16.4551 16.8022H14.4368V20.9288H16.4551C16.5708 20.9288 16.6865 21.0509 16.8022 21.2952V31.4704L16.86 32.1903H21.0638V21.1859C21.0895 21.0188 21.1666 20.9352 21.2952 20.9352H24.7276C24.8819 20.9352 25.0812 19.6368 25.3254 17.04V16.8086H21.2952C21.1409 16.8086 21.0638 16.7315 21.0638 16.5772V13.7297C21.0638 12.5149 21.7773 11.8464 23.1978 11.7114H25.5632V8.16327C25.5632 7.93187 24.7341 7.81617 23.0821 7.81617H22.4843C19.759 7.81617 17.9849 8.83818 17.1557 10.8758C17.0014 11.3 16.8472 11.9364 16.6929 12.772H16.6865Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-social-link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.instagram.com/edmattersyyc",
                }}
              >
                <_Builtin.DOM
                  tag="svg"
                  slot=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M18.5753 0H21.4247C24.4734 0 27.9466 1.26431 31.8379 3.79294C34.7709 6.08934 36.8998 8.74053 38.2184 11.7465C39.4083 14.6105 40 17.0295 40 18.9969V20.6483C40 25.0798 38.1862 29.4791 34.5522 33.8333C30.3393 37.9423 25.4446 40 19.8746 40C12.9217 40 7.23589 36.7554 2.83004 30.2596C0.94549 26.757 0 23.3188 0 19.9323C0 14.359 2.28976 9.33398 6.86284 4.86373C11.1272 1.61909 15.0314 0 18.5753 0ZM9.34555 17.3262V23.5123C9.34555 26.886 10.4132 29.1308 12.5422 30.2596C13.5006 30.8015 16.575 31.0079 21.772 30.8595C25.7533 30.8595 28.0431 30.4274 28.6348 29.5565C29.9791 28.4793 30.6544 26.6989 30.6544 24.209V16.2554C30.6544 13.1205 29.5482 11.0627 27.3356 10.0887L25.8627 9.6049L24.3705 9.48879H15.7389C12.6644 9.48879 10.6062 10.9918 9.57067 13.9977C9.41631 14.9202 9.33912 16.0297 9.33912 17.3262H9.34555ZM16.0926 11.3982H24.3705C27.3677 11.3982 28.8664 12.9786 28.8664 16.1458V24.5638C28.4676 27.4923 27.2455 28.9566 25.2002 28.9566H21.7656C20.164 28.9566 18.4724 28.9953 16.6844 29.0727C13.7128 29.0727 11.9698 28.1245 11.4681 26.2345C11.3137 25.183 11.2365 23.6026 11.2365 21.4869V18.8615C11.2365 14.9073 11.5517 12.9334 12.1885 12.9334C12.8188 11.9078 14.118 11.3982 16.0862 11.3982H16.0926ZM14.5618 20.3C14.5618 22.8544 16.0219 24.6283 18.942 25.6281H21.3089C24.1389 24.6025 25.5539 22.7899 25.5539 20.1838V19.9323C25.5539 18.4551 24.8014 17.0747 23.3028 15.791C22.2801 15.075 21.2188 14.7202 20.1254 14.7202H20.0096C17.5655 14.7202 15.8675 15.9845 14.9092 18.5131C14.7805 18.6809 14.6647 19.2808 14.5618 20.3ZM20.0096 16.6038H20.1254C21.8299 16.6038 22.9748 17.5198 23.5601 19.3453C23.6372 19.4485 23.6758 19.7259 23.6758 20.1838C23.3028 22.6351 22.1193 23.8607 20.1254 23.8607C18.5496 23.8607 17.4047 23.0672 16.6908 21.4869C16.5879 21.3578 16.5043 20.9644 16.4399 20.3C16.7229 17.8358 17.9128 16.6038 20.0096 16.6038ZM24.4863 14.6041C24.8336 15.3975 25.2774 15.791 25.8048 15.791C26.3322 15.791 26.7696 15.3975 27.104 14.6041C26.9239 13.643 26.448 13.1656 25.6697 13.1656C24.8786 13.4107 24.4863 13.8945 24.4863 14.6041Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-social-link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.linkedin.com/company/edmattersyyc",
                }}
              >
                <_Builtin.DOM
                  tag="svg"
                  slot=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    slot=""
                    d="M19.5885 0H20.5281C24.7335 0 28.9324 1.61473 33.1249 4.85064C36.2352 7.96383 38.1403 10.767 38.8272 13.2601C39.2937 14.3 39.6112 15.482 39.7667 16.8125C39.9222 18.1431 40 19.0086 40 19.409V21.295C39.689 24.1628 39.0539 26.5719 38.1079 28.5161C36.0084 32.7467 32.8074 35.9438 28.4983 38.0946C25.4139 39.367 22.6405 40 20.1782 40H19.9449C14.9684 40 10.4196 38.1851 6.29192 34.5487C3.69998 31.8618 2.08003 29.4914 1.42556 27.4439C0.706302 25.8485 0.233274 23.8334 0 21.4048V18.9117C0 14.8361 1.69772 10.6959 5.09963 6.4912C9.54479 2.17019 14.3787 0 19.5885 0ZM11.9877 12.7757V13.4991C12.208 14.6811 12.9597 15.2689 14.2362 15.2689C15.2794 15.2689 15.9922 14.6811 16.3875 13.4991V13.3829C16.3875 12.1621 15.6294 11.4516 14.1196 11.2385C13.1929 11.2385 12.4866 11.7487 11.9877 12.7757ZM12.221 17.0386V28.0575C12.2469 28.2125 12.3246 28.29 12.4542 28.29H15.7719C15.9274 28.29 16.0052 28.2125 16.0052 28.0575V17.2711L15.7719 16.8061H12.4542C12.2987 16.8319 12.221 16.9094 12.221 17.0386ZM22.2064 17.9945H21.9537V16.8061H18.163V28.0575C18.1889 28.2125 18.2666 28.29 18.3962 28.29H21.7139C21.8694 28.29 21.9472 28.2125 21.9472 28.0575V22.0184C22.1416 20.3585 22.822 19.5253 23.9819 19.5253C25.3232 19.5253 25.9971 20.3585 25.9971 22.0184V28.0575C26.023 28.2125 26.1008 28.29 26.2304 28.29H29.8072V20.83C29.8072 19.493 29.1722 18.2658 27.8957 17.1484C26.9302 16.7609 26.3405 16.5671 26.1202 16.5671H24.9279C24.0013 16.6058 23.1006 17.0773 22.2129 17.9881L22.2064 17.9945Z"
                    fill="currentColor"
                  />
                </_Builtin.DOM>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "splitter", "footer-splitter", "copy")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "footer-links", "shrink")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "mb-0")}>
              <_Builtin.Span className={_utils.cx(_styles, "copyright-year")}>
                {"2025"}
              </_Builtin.Span>
              {" © EducationMatters"}
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-divider")}
              tag="div"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "mb-0")}>
              {"Charitable Registration #898887005RR0001"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "col", "footer-links", "shrink")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              block=""
              options={{
                href: "tel:4038797855",
              }}
            >
              {"403.879.7855"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-divider")}
              tag="div"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              block=""
              options={{
                href: "https://maps.app.goo.gl/1QhiaJBE6TrXNsz47",
              }}
            >
              {"1221 8 Street SW, Calgary AB, T2R 0L4"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
