import React, { useEffect, useRef, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHanlder: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHanlder: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty. </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email. </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

/*

OVA E PRED CUSTOM HOOK

import React, { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHanlder = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    // if (enteredName.trim() == "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid) {
      return;
    }

    // const enteredValue = nameInputRef.current.value;

    // nameInputRef.current.value = "";
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  console.log(enteredNameTouched);
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHanlder}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty. </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email. </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;



*/
