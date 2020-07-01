import React from 'react';
import Header from './Header';
import NavControl from "./NavControl";

function App(){
  return(
    <React.Fragment>
      <div className="box">
        <Header/>
        <NavControl/>
      </div>
    </React.Fragment>
  );
}

export default App;
