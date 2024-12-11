import React, { useState } from 'react';

const ColorPickerPage = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Color Picker Page</h1>
      <p>Pick a color to dynamically change the box below:</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ margin: '20px', padding: '10px' }}
      />
      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '20px auto',
          backgroundColor: color,
          border: '1px solid #ccc',
        }}
      ></div>
    </div>
  );
};

export default ColorPickerPage;
