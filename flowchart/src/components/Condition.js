import React, { useState } from "react";
import "../App.css"; // Assuming you have a CSS file for styling

function Condition() {
  const [condition, setCondition] = useState("");

  const conditionHandleChange = (e) => {
    const value = e.target.value.toLowerCase(); // Convert input to lowercase for case insensitivity
    setCondition(value);
  };

  return (
    <div className="condition-container">
      <input
        type="text"
        name="condition"
        value={condition}
        onChange={conditionHandleChange}
      />
          <div className="horizontal-line right"></div>
          
          <div className="horizontal-line left"></div>
        
    </div>
  );
}

export default Condition;
