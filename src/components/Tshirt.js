import React from 'react';
import PropTypes from 'prop-types';

function Tshirt(props){
  function buyTShirt() {
    props.buy(props.id)
  }

  function restockTShirt(){
    props.restock(props.id)
  }

  return (
    <React.Fragment>
      <h3>{props.name}</h3> 
      <p>{props.description}</p>
      <p>{props.quantity}</p>
      <img src={props.img}/>
      <br/>
      <button onClick={buyTShirt}>Buy</button>
      <button onClick={restockTShirt}>Restock</button>
    </React.Fragment>
  );
}

Tshirt.propTypes = {
  name: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  quantity: PropTypes.number,
  img: PropTypes.string
};

export default Tshirt;