import React from 'react';
import Tshirt from './Tshirt'

// name, description, quantity in stock 

function TShirtList(){
  return(
    <React.Fragment>
      <hr/>
      {tShirtList.map((tshirt,index)  =>
        <Tshirt 
          name = {tshirt.name}
          description = {tshirt.description}
          quantity = {tshirt.quantity}
          img = {tshirt.img}
          key = {index}
        />
      )}
    </React.Fragment>
  );
}

const tShirtList = [
  {
    name: "name1",
    description: "description1",
    img: 'https://image.shutterstock.com/image-vector/typography-slogan-bw-rose-illustration-600w-1193614804.jpg',
    quantity: 0
  },
  {
    name: "name2",
    description: "description2",
    img: 'https://image.shutterstock.com/image-vector/give-me-some-space-slogan-600w-1033653763.jpg',
    quantity: 0
  },
  {
    name: "name3",
    description: "description3",
    img: 'https://image.shutterstock.com/image-vector/astronaut-lotus-position-tattoo-art-600w-561423802.jpg',
    quantity: 0
  },
  {
    name: "name4",
    description: "description4",
    img: 'https://image.shutterstock.com/image-vector/vector-illustration-portrait-monkey-rainbow-600w-1121273951.jpg',
    quantity: 0
  }
]

export default TShirtList;
