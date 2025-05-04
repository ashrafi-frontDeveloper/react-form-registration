import './App.css'
import React, { Component } from 'react'



class LoginForm extends Component {
    constructor() {
      super()
    }
    render() {
      return (
            <div className="card-front">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3">Log In</h4>
                  <div className="form-group">
                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                    <i className="input-icon uil uil-at"></i>
                  </div>	
                  <div className="form-group mt-2">
                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <a href="#" className="btn mt-4">submit</a>
                  <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                </div>
              </div>
            </div>
      )
    }
}

class SigninForm extends Component {
    constructor() {
      super()

      this.state = {
        fullName : '',
        email: '',
        password: ''
      }

    }
    submitHandler (event) {
      // event.preventDefault()
      console.log(event);
    }
    fullNameHandler (event) {
      this.setState({ fullName: event.target.value })
      
    }
    emailHandler (event) {
      this.setState({ email: event.target.value })
      
    }
    passwordHandler (event) {
      this.setState({ password: event.target.value })
      
    }
      render () {
        return (
          <div className="card-back">
            <div className="center-wrap">
              <div className="section text-center">
                <h4 className="mb-4 pb-3">Sign Up</h4>
                <div className="form-group">
                  <input onChange={this.fullNameHandler.bind(this)} type="text" value={this.state.fullName} name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                  <i className="input-icon uil uil-user"></i>
                </div>	
                <div className="form-group mt-2">
                  <input onChange={this.emailHandler.bind(this)} type="email" value={this.state.email} name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                  <i className="input-icon uil uil-at"></i>
                </div>	
                <div className="form-group mt-2">
                  <input onChange={this.passwordHandler.bind(this)} type="password" value={this.state.password} name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                  <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <a href="#" onSubmit={() => this.submitHandler} className="btn mt-4">submit</a>
              </div>
            </div>
          </div>
        )
      }
}

export default class App extends Component {
  constructor () {
    super ()
    this.state = {
      isLogin : true,
      users : []

    }
  }

  render() {
    return (
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                  <input onClick={() => this.setState(prev => ({ isLogin: !prev.isLogin }))} className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      {
                        this.state.isLogin ? (
                          <LoginForm />
                        ) : (
                          <SigninForm />
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
