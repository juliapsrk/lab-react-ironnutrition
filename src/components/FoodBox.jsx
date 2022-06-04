import React, { useState } from 'react';

const FoodBox = (props) => {
  const { name, calories, image, onSelect } = props;

  const [quantity, setQuantity] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSelect({ name, calories, image, quantity });
  };

  const handleQuantity = (event) => {
    setQuantity(+event.target.value);
  };

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong> <br />
            <small>{calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <form className="control" onSubmit={handleSubmit}>
            <input
              className="input"
              type="number"
              value={quantity}
              onChange={handleQuantity}
            />
            <button className="button is-info">+</button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default FoodBox;
