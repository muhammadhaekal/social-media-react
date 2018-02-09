import React from 'react'
import SignUpJumbotron from '../component/SignUpJumbotron'
import NavBar from '../component/NavBar'


const Login = (props) => {
    return (
      <div>
        <NavBar auth={props.auth}/>
        <SignUpJumbotron signUp={(json)=>{this.signUp(json)}}/>
      </div>
    )
}

export default Login
