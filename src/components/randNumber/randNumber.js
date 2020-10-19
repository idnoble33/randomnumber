import React from "react";
import classes from "./randNumber.module.css";

const randomNumber = (props) => {
  return (
    <div>
      <div className={classes.title}>Random Number Generator</div>
      <p className={classes.randNum}>{props.randNumber}</p>
    </div>
  );
};

export default randomNumber;
