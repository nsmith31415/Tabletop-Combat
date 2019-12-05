import React, {Component} from 'react';
import './App.css';
import './style.css';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state={
      clicked: false
    }
    this.handleClick=this.handleClick.bind(this);
  }
  render() {
      return (
        <div className="Welcome">
          <header className="App-header">
            <img src={require("./LogoTest2.PNG")} class="App-logo" alt="logo" />
            <h4>
              Welcome to the Code Wizards character creator!
            </h4>
            <div class="btn-holder">
              <button class="btn btn-primary btn-flat" onClick={this.handleClick}>
                {this.state.clicked ? "clicked" : "unclicked"}
              </button>
            </div>
          </header>
        </div>
        );
    
      }

  handleClick() {
    var click = this.state.clicked;
    var newClick = click === true ? false : true;
    this.setState({clicked: newClick});
    }


}




export default Welcome;
