import React from 'react';
import CD  from "./CD";


class CDList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cdList: [
        {
          title: "title1",
          tracklist: [],
          img: "",
          quantity: 15
        },
        {
          title: "title2",
          tracklist: [],
          img: "",
          quantity: 15
        },
        {
          title: "title3",
          tracklist: [],
          img: "",
          quantity: 15
        },
        {
          title: "title4",
          tracklist: [],
          img: "",
          quantity: 15
        }
      ]
    }
    this.buyButtonClick = this.buyButtonClick.bind(this)
    this.restockButtonClick = this.restockButtonClick.bind(this)
  }

  buyButtonClick = (i) => {
    const currentState = [...this.state.cdList];
    if (currentState[i].quantity <= 1 || isNaN(currentState[i].quantity)) {
      currentState[i].quantity = "Out of Stock"
      this.setState({cdList: currentState})
    } else {
      currentState[i].quantity -= 1;
      this.setState({cdList: currentState})
    }
  }

  restockButtonClick = (i) => {
    const currentState = [...this.state.cdList];
    if (currentState[i].quantity === "Out of Stock") {
      currentState[i].quantity = 0;
      currentState[i].quantity += 1;
      this.setState({ cdList: currentState })

    } else {
      currentState[i].quantity += 1;
      this.setState({ cdList: currentState })
    }
    
  }

  render () {
    return(
      <React.Fragment>
        <hr/>
        {this.state.cdList.map((cd, index) =>
          <CD
            title ={cd.title}
            tracklist = {cd.tracklist}
            img = {cd.img}
            quantity = {cd.quantity}
            buy = {this.buyButtonClick}
            restock = {this.restockButtonClick}
            id = {index}
            key = {index}
          />
        )}
      </React.Fragment>
    );
    }

}


export default CDList