
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (index) => {
    const newBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(newBoxes);
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(index)}
        />
      ))}
    </div>
  );
};

export default BoxList;
