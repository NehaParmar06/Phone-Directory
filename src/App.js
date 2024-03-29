import React, {Component} from 'react';
import Header from './Header';
import './App.css';

class App extends Component{

  deleteHandler(message){
    alert(message);
  }

  render(){
    let subscribers = [
      {
        id: 1,
        name: "Neha",
        phone: '8147094028'
      },
      {
        id: 2,
        name: "Poppa",
        phone: '9827920102'
      }
    ]

    return(
      <div>
       <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <div>
            <button className="custom-btn add-btn">Add</button>

            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
            </div>

            {
              subscribers.map(sub => {
                return(
                  <div key={sub.id} className="grid-container">
                    <span className="grid-item">{sub.name}</span>
                    <span className="grid-item">{sub.phone}</span>
                    <span className="grid-item action-btn-container">
                      {/* <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button> */}

                      <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete Handler Clicked!")}>Delete</button>
                    </span>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
