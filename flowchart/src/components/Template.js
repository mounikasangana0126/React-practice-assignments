import React, { useState } from 'react';
import '../App.css';
import Add from './Add';
import Condition from './Condition'; // Assuming you have a Condition component
import Statement from './Statement';

function Template() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [end, setEnd] = useState(false);

  const handleSelectItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    if (item === 'end') {
      setEnd(true);
    }
  };

  return (
    <div className='template'>
      <div className='oval'>START</div>
      {selectedItems.map((item, index) => (
        <div key={index}>
          {item === 'condition' ? (
            <Condition key={index} /> 
          ) : item === 'statement' ? (
            <Statement/>
          ) : item === 'end' ? (
            <div key={index} className='oval'>end</div>
          ) : null}
        </div>
      ))}
      {end ? (
        <p>The process has ended.</p>
      ) : (
        <Add onSelect={handleSelectItem} />
      )}
    </div>
  );
}

export default Template;
