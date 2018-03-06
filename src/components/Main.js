import React, {Component} from "react";



export default class Main extends Component{
  render(){
    return(
      <div>
        <p className="App-intro">
          hello, {this.props.name}<br/>
          do you want to see the secret area:? <a href="/secret">click here</a>
        </p>
        {!this.props.auth.isAuthenticated() &&
        <div>
          <hr/>
          Please login first
          <hr/>
          <button onClick={this.props.auth.login}>Login</button>
        </div>
        }
      </div>
    )
  }
}