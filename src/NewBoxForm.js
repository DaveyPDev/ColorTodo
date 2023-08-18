
import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: '',
    height: '',
    backgroundColor: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
