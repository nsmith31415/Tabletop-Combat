import React, {Component} from 'react';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      clicked: false
    }
  }
  render() {
    if(this.state.clicked){
      return (
        <div className="App">
          <header className="App-header">
            <img src={require("./LogoTest2.PNG")} class="App-logo" alt="logo" />
            <h4>
              Welcome to Tabletop Combat!
            </h4>
            <div class="btn-holder">
              <button class="btn btn-primary btn-flat" onclick={this.unClicked()}>
                Unclick
              </button>
            </div>
          </header>
        </div>
        );
    }
    return(
      <div className="App">
        <header className="App-header">
          <img src={require("./LogoTest2.PNG")} class="App-logo" alt="logo" />
          <h4>
            Welcome to Tabletop Combat!
          </h4>
          <div>
            <div class="btn-holder">
              <button class="btn btn-primary btn-flat" onlcick={this.beenClicked()}>
                click
              </button> 
            </div>
          </div>
        </header>
      </div>
    );
  }

  beenClicked() {
    this.setState({clicked: true});
    }
    
  unClicked(){
    this.setState({clicked:false});
  }
}




export default App;
