import React from "react";

export default function Heading({ title, padding }) {
  return (
    <>
      <div
        className={`flex align-center justify-center contact-parent ` + padding}
      >
        <div className="contact-child flex">
          <hr />
        </div>
        <div className="contact-child flex">
          <h1>{title || "Default Title"}</h1>
        </div>
        <div className="contact-child flex">
          <hr />
        </div>
      </div>
    </>
  );
}
