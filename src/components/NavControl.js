import React from 'react';
import Home from './Home';
import TShirtList from './TShirtList';
import CDList from './CDList';

class NavControl extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      viewVisibleOnPage: "home"
    }
  }

  homeButtonClick = () => {
    this.setState({
      viewVisibleOnPage: "home"
    })
  }

  tShirtButtonClick = () => {
    this.setState({
      viewVisibleOnPage: "t-shirts"
    })
  }

  cdButtonClick = () => {
    this.setState({
      viewVisibleOnPage: "cd's"
    })
  }

  render() {
    let currentViewVisible = null;
    let button1 = null; 
    let button1Text = null;
    let button2 = null;
    let button2Text = null;

    if (this.state.viewVisibleOnPage === "home") {
      currentViewVisible = <Home/>;
      button1 = this.tShirtButtonClick;
      button1Text = "View All T-Shirts";
      button2 = this.cdButtonClick; 
      button2Text = "View All CD's";
    } else if (this.state.viewVisibleOnPage === "t-shirts") {
      currentViewVisible = <TShirtList/>;
      button1 = this.homeButtonClick;
      button1Text = "Home Page";
      button2 = this.cdButtonClick; 
      button2Text = "View All CD's";
    } else if (this.state.viewVisibleOnPage === "cd's") {
      currentViewVisible = <CDList/>;
      button1 = this.homeButtonClick;
      button1Text = "Home Page";
      button2 = this.tShirtButtonClick; 
      button2Text = "View All T-Shirts";
    }

    return (
      <React.Fragment>
        {currentViewVisible}
        <button onClick={button1}>{button1Text}</button>
        <button onClick={button2}>{button2Text}</button>
      </React.Fragment>
    );
  }
}

export default NavControl;