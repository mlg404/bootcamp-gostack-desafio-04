import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return (
      <div className="header">
        <h1>reactbook.</h1>
        <div>
          <a>Meu perfil</a>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    )
  }

}

export default Header;