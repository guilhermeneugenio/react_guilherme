import retry from '../assets/retry.png'
import React, { Component } from 'react';
import ReactLoading from "react-loading";
import { Navigate   } from 'react-router-dom';

class LandingScreen extends Component { //different
  constructor(props) {
    super(props)
    this.state = {serverHealth: 'unknown'};
  }

  componentDidMount() {
    this.checkSH()
  }

  checkSH() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      if(xhr.status === 200) this.setState({serverHealth: 'ok'});
      else if(xhr.status === 503) this.setState({serverHealth: 'retry'});
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://private-anon-b0e0d26dfa-blissrecruitmentapi.apiary-mock.com/health')
    // send the request
    xhr.send()
  }
  render() {
    const serverHealth = this.state.serverHealth;
    let loadingScreen = <div className='column'><ReactLoading type={"bubbles"} color="#fff" /> <p>Checking Server Health</p></div>
    if(serverHealth === 'retry') loadingScreen = <div className="column" ><img className="small_icon" src={retry} alt="retry" />
        <button className='btn' style={{marginTop: "30px"}} onClick={() => this.checkSH()}>Retry</button></div>
    else if(serverHealth === 'ok')  return <Navigate to='/questions'/>;
    return (
      <div className="App"> 
      <header className="App-header">
        {loadingScreen}
      </header>
    </div>
    );
  }
}

export default LandingScreen;
