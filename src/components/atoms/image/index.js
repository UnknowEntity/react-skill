import React from "react";

const FormText = (props) => {
  const { src, width = "100%", classImg = "" } = props;
  return (
    <img
      src={src}
      style={{ width: width }}
      className={classImg}
      alt={"/default.jpg"}
    />
  );
};

export default FormText;
