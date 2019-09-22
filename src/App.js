import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <div className="header">
        <div>
        Phone Directory
        </div>
      </div>
      <button>Add</button>
      <div>
        <span>Name</span><br/>
        <span>Phone</span>
      </div>
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder="Your Name"></input>
      </div>
    );
  }
}

export default App;
