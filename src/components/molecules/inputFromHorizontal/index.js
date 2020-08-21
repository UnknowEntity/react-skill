import React from "react";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/text";
import "./style.css";

const InputFormHorizontal = (props) => {
  const { text, value, onChange, type, disable } = props;
  return (
    <div className={"input-form-hor"}>
      <Text content={`${text}:`} classText={"m"} />
      <InputText
        value={value}
        onChange={onChange}
        type={type}
        disable={disable}
      />
    </div>
  );
};

export default InputFormHorizontal;
