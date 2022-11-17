import React from "react";
import "./Title.css";

export const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
