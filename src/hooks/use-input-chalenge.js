import React, { useState } from "react";

const UseInputChalenge = (valueChekError) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouced] = useState(false);

  const valueIsValid = valueChekError(value);
  const hasError = !valueIsValid & isTouched;
  const hasNotError = !valueIsValid & !isTouched || valueIsValid & isTouched;

  const handleValueState = (e) => {
    setValue(e.target.value);
  };

  const handleBlurState = (e) => {
    setIsTouced(true);
  };

  const reset = () => {
    setValue("");
    setIsTouced(false);
  };

  return {
    value,
    valueIsValid,
    hasError,
    handleValueState,
    handleBlurState,
    reset,
    hasNotError,
  };
};

export default UseInputChalenge;
