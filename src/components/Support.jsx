import React from "react";
import { SupportData } from "../assets/Events/SupportData";
import { SupportSection } from "../screens/Home/Home.style";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Support({ className, style }) {
  return (
    <>
      <SupportSection className={className}>
        <h4 className="heading" style={style}>
          Support
        </h4>
        <p>{SupportData}</p>
      </SupportSection>
      <div className="sm-icons container pb-3">
        <p
          style={{
            fontSize: "x-large",
            fontWeight: 400,
            color: "#b0d1be",
            ...style
          }}
          className="m-0"
        >
          Connect With Us
        </p>

        <div className=" d-flex flex-row w-100 justify-content-start">
          <a
            className="m-2 ms-0 text-white"
            href="https://instagram.com/cittakshashila?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <FaInstagram size={25} />
          </a>
          <a
            className="m-2 text-white"
            href="https://wa.me/message/6HAFB72GRMU7N1"
            target="_blank"
          >
            <FaWhatsapp size={25} />
          </a>
          <a
            className="m-2 text-white"
            href="https://youtube.com/c/CITTakshashila"
            target="_blank"
          >
            <FaYoutube size={25} />
          </a>
          <a
            className="m-2 text-white"
            href="https://twitter.com/cittakshashila?t=qD_1iQtp-ZgNBT7tnwxCaQ&s=08"
            target="_blank"
          >
            <FaTwitter size={25} />
          </a>
          <a
            className="m-2 text-white"
            href="https://www.linkedin.com/in/cittakshashila"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            className="m-2 text-white"
            href="https://m.facebook.com/CIT-Takshashila-106831860821647"
            target="_blank"
          >
            <FaFacebook size={25} />
          </a>
        </div>
      </div>
    </>
  );
}
