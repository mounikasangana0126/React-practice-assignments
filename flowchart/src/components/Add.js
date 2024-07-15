import React, { useState } from 'react';
import '../App.css'; // Assuming you have styles for Add component

function Add({ onSelect }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleAddClick = () => {
    if (selectedItem) {
      onSelect(selectedItem); // Callback to parent component with selected item
    } else {
      alert('Please select an option.'); // Optional: Provide feedback if no option is selected
    }
  };

  return (
    <>
      <div className='dropdown'>
        <select value={selectedItem} onChange={handleSelectChange}>
          <option value="">Choose:</option>
          <option value="condition">Condition</option>
          <option value="statement">Statement</option>
          <option value="end">End</option>
        </select>
        <button onClick={handleAddClick}>Add</button>
      </div>
    </>
  );
}

export default Add;
