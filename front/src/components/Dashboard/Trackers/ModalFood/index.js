/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useRef } from 'react';
import Food from 'src/assets/images/trackers/icone-alimentation.svg';
import PropTypes from 'prop-types';

import './modalfood.scss';

const ModalFood = ({
  onClick,
  fetchFoodList,
  foodTypeList,
  setTrackerFood,
}) => {
  useEffect(() => {
    fetchFoodList();
  }, []);
  console.log('foodTypeList', foodTypeList);
  const inputFoodType = useRef(null);
  const [foodType, setFoodType] = useState('');

  const inputFoodQuantity = useRef(null);
  const [foodQuantity, setFoodQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('event.target', event.target);
    onClick();
    setTrackerFood(foodQuantity, foodType);
  };

  const inputChange = (event) => {
    // console.log('event.target', event.target.value);
    setFoodQuantity(inputFoodQuantity.current.value);
    setFoodType(inputFoodType.current.value);
  };

  return (
    <div className="modal-food">
      <img className="logo-food" src={Food} alt="" />
      <h1 className="mod-title-food">Repas</h1>

      <form className="mod-form-food" onSubmit={handleSubmit}>
        <div className="mod-meal">
          <label className="mod-label-food">Aliment :</label>
          <select className="mod-input-food" name="food_type" id="food-select" ref={inputFoodType} onChange={inputChange}>
            {
              foodTypeList.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
          <label className="mod-label-food">Quantité (en grammes) :</label>
          <input className="mod-input-food" type="number" name="quantity" ref={inputFoodQuantity} value={foodQuantity} onChange={inputChange} />
        </div>
        <button className="modal-button-food"> Valider</button>
      </form>
    </div>
  );
};

ModalFood.propTypes = {
  onClick: PropTypes.func.isRequired,
  fetchFoodList: PropTypes.func.isRequired,
  foodTypeList: PropTypes.func.isRequired,
  setTrackerFood: PropTypes.func.isRequired,
};
export default ModalFood;
