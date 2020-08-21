import React from "react";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/text";
import "./style.css";

const InputFormVertical = (props) => {
  const {
    text,
    value,
    onChange,
    type,
    disable,
    classInput = "",
    errorMessage = "",
  } = props;
  return (
    <div className={"input-form-ver"}>
      <Text classText={classInput}>{text}</Text>
      <InputText
        value={value}
        onChange={onChange}
        type={type}
        disable={disable}
      />
      <Text classText={`s-s red`}>{errorMessage}</Text>
    </div>
  );
};

export default InputFormVertical;
