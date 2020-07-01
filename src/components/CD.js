import React from 'react';
import PropTypes from 'prop-types';

function CD(props){
  function buyCD() {
    props.buy(props.id)
  }

  function restockCD(){
    props.restock(props.id)
  }


  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>{props.tracklist}</p>
      <p>{props.quantity}</p>
      <img src={props.image}/>
      <br />
      <button onClick={buyCD}>Buy</button>
      <button onClick={restockCD}>Restock</button>
    </React.Fragment>
  );
}

CD.propTypes = {
  title: PropTypes.string.isRequired,
  tracklist: PropTypes.array.isRequired,
  quantity: PropTypes,
  img: PropTypes.string
};

export default CD;