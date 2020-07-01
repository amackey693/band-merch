import React from 'react';
import PropTypes from 'prop-types'

function Tshirt(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3> 
      <h3>{props.description}</h3>
      <h3>{props.quantity}</h3>
      <img src={props.img}/>
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