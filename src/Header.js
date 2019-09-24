import React, {Component} from 'react';
import './Header.css'

//Functinal Component way
const Header = function(props){
    // const headerStyle = {
    //     textAlign: 'center',
    //     padding: 20,
    //     background: '#000',
    //     color: '#fff',
    //     textTransform: 'uppercase'
    //  };
    return(
        <div className="header">
             {props.heading}
      </div>
    )
}


//Class Component way
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                 {this.props.heading}
//             </div>
//         )
//     }

// }

export default Header;