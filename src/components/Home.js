import React from 'react';
import Rive from 'rive-react';
import rocket from '../rocket_demo.riv';

class Home extends React.Component {
    render() {
      return (
        <div class="temppage">
        <div class="t1"> 
          
        <div class="home">
        <h1>Trending</h1>
        <h1>Frontend</h1>
        <h1>Designs</h1>
        </div> 

         
        </div>
        <div class="container1">
          <Rive src={rocket}/>
        </div>
      </div>
      );
    }
  }

export default Home;