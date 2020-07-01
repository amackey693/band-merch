import React from 'react';
import Tshirt from './Tshirt';

// name, description, quantity in stock 

class TShirtList extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tShirtList: [ {
        name: "name1",
        description: "description1",
        img: 'https://image.shutterstock.com/image-vector/typography-slogan-bw-rose-illustration-600w-1193614804.jpg',
        quantity: 10
      },
      {
        name: "name2",
        description: "description2",
        img: 'https://image.shutterstock.com/image-vector/give-me-some-space-slogan-600w-1033653763.jpg',
        quantity: 10
      },
      {
        name: "name3",
        description: "description3",
        img: 'https://image.shutterstock.com/image-vector/astronaut-lotus-position-tattoo-art-600w-561423802.jpg',
        quantity: 10
      },
      {
        name: "name4",
        description: "description4",
        img: 'https://image.shutterstock.com/image-vector/vector-illustration-portrait-monkey-rainbow-600w-1121273951.jpg',
        quantity: 10
      }]
      
    }
    this.buyButtonClick = this.buyButtonClick.bind(this)
    this.restockButtonClick = this.restockButtonClick.bind(this)
  }

  buyButtonClick = (i) => {
    const currentState = [...this.state.tShirtList];
    if (currentState[i].quantity <= 1 || isNaN(currentState[i].quantity)) {
      currentState[i].quantity = "Out of Stock";
      this.setState({ tShirtList: currentState })
    } else {
      currentState[i].quantity -= 1;
      this.setState({ tShirtList: currentState })
    }
  }

  restockButtonClick = (i) => {
    const currentState = [...this.state.tShirtList];
    if (currentState[i].quantity === "Out of Stock") {
      currentState[i].quantity = 0;
      currentState[i].quantity += 1;
      this.setState({ tShirtList: currentState })
    } else {
      currentState[i].quantity += 1;
      this.setState({ tShirtList: currentState })
    }
  }


  render () {

    return(
      <React.Fragment>
        <hr/>
        {this.state.tShirtList.map((tshirt,index)  =>
          <Tshirt 
            name = {tshirt.name}
            description = {tshirt.description}
            quantity = {tshirt.quantity}
            img = {tshirt.img}
            id = {index}
            buy = {this.buyButtonClick}
            restock = {this.restockButtonClick}
            key = {index}
          />
        )}
      </React.Fragment>
    );
  }
  
} 


export default TShirtList;
