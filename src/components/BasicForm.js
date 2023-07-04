import React from "react";
import { isElement } from "react-dom/test-utils";
import UseInputChalenge from "../hooks/use-input-chalenge";

const BasicForm = (props) => {
  const valueChekError = (value) => {
    return value.trim() !== "";
  };

  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    handleValueState: handleNameState,
    handleBlurState: handleNameBlur,
  } = UseInputChalenge(valueChekError);

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={handleNameBlur}
            onChange={handleNameState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
