import React, { useState } from "react";
import "../App.css";
import Add from "./Add";
function Condition(props) {
  const [condition, setCondition] = useState("");

  const conditionHandleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setCondition(value);
  };

  return (
    <div className="condition-container">
      <input
        type="text"
        name="condition"
        value={condition}
        onChange={conditionHandleChange}
        placeholder="condition"
      />
      <div className="horizontal-line right">
        Yes
        <div className="vertical-line vertical-line-right">
          <input type="text" name="true"  className="rightinput"/>
      
        </div>
      </div>

      <div className="horizontal-line left">
        No
        <div className="vertical-line vertical-line-left">
          <input type="text" name="false"  className="leftinput"/>
        </div>
      </div>
    </div>
  );
}

export default Condition;
