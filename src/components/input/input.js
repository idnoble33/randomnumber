import classes from "../input/input.module.css";
import React from "react";

const input = (props) => {
  return (
    <div>
      <div id="headers" className={classes.header}>
        <p>Min</p>
        <p>Max</p>
      </div>
      <div id="inputs" className={classes.input}>
        <input
          id="min"
          type="number"
          value={props.min}
          onChange={props.minChange}
        />
        <input
          id="max"
          type="number"
          value={props.max}
          onChange={props.maxChange}
        />
        <input
          id="generate"
          type="submit"
          value="Generate Number"
          onClick={props.getInputs}
        />
      </div>
    </div>
  );
};

export default input;
