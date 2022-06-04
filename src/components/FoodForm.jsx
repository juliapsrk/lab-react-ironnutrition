import React, { useState } from 'react';

const FoodForm = (props) => {
  const { onAddFood } = props;

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  return (
    <form onSubmit={onAddFood}>
      <input
        type="text"
        className="input"
        placeholder="Name"
        value={name}
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Calories"
        value={calories}
        name="calories"
        onChange={(event) => setCalories(event.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Image URL"
        value={image}
        name="image"
        onChange={(event) => setImage(event.target.value)}
      />
      <button className="button is-info">Submit</button>
    </form>
  );
};

export default FoodForm;
