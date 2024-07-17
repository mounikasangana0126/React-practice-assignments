import React, { useState } from 'react';
import '../App.css'; 

function Add({ onSelect }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleAddClick = () => {
    if (selectedItem) {
      onSelect(selectedItem); 
    } else {
      alert('Please select an option.'); 
    }
  };

  return (
    <div className='addcontainer'>
    <div className='middleline'></div>
      <div className='dropdown'>
        <select value={selectedItem} onChange={handleSelectChange}>
          <option value="">Choose:</option>
          <option value="condition">Condition</option>
          <option value="statement">Statement</option>
          <option value="end">End</option>
        </select>
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default Add;
