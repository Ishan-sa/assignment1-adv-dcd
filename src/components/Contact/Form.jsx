import React from "react";

export default function Form() {
  return (
    <>
      <div className="form-container">
        <form className="flex flex-col">
          <div className="flex width-full name-cont">
            <div className="flex flex-col width-full name-child">
              <label for="Name">First Name:</label>
              <input placeholder="First Name Here" />
            </div>
            <div className="flex flex-col width-full name-child">
              <label for="Name">Last Name:</label>
              <input placeholder="First Name Here" />
            </div>
          </div>
          <div className="flex flex-col">
            <label for="Name">Email:</label>
            <input placeholder="Email Here" />
          </div>
        </form>
      </div>
    </>
  );
}
