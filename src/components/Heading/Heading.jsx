import React from "react";

export default function Heading({ title }) {
  return (
    <>
      <div className="flex align-center justify-center contact-parent">
        <div className="contact-child flex">
          <hr />
        </div>
        <div className="contact-child flex">
          <h2>{title || "Default Title"}</h2>
        </div>
        <div className="contact-child flex">
          <hr />
        </div>
      </div>
    </>
  );
}
