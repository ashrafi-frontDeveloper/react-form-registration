import './App.css'
import React, { Component } from 'react'



class LoginForm extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
        password: '',
        emailError: ''
      }
    }

    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })

      const { name, value } = event.target
      this.setState({ [name]: value })

      if (name === "email") {
        if (!this.emailRegex.test(value)) {
          this.setState({ emailError: "Email is not valid." })
        } else {
          this.setState({ emailError: "" })
        }
      }
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      this.props.onLogin(this.state.email, this.state.password)
 
      this.setState({
        email: '',
        password: ''
      })
    }
    render() {
      return (
            <div className="card-front">
              <div className="center-wrap">
                <div className="section text-center">
                  <h4 className="mb-4 pb-3">Log In</h4>
                  <div className="form-group">
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                    <i className="input-icon uil uil-at"></i>
                    {this.state.emailError && (
                    <p className="text-danger small mt-1">{this.state.emailError}</p>
                    )}
                  </div>	
                  <div className="form-group mt-2">
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                    <i className="input-icon uil uil-lock-alt"></i>
                  </div>
                  <a href="#" onClick={this.handleSubmit} className="btn mt-4">submit</a>
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
        password: '',
        emailError: ''
      }

    }
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    handleChange = (event) => {
      this.setState({ [event.target.name]:event.target.value })

      const { name, value } = event.target
      this.setState({ [name]: value })

      if (name === "email") {
        if (!this.emailRegex.test(value)) {
          this.setState({ emailError: "Email is not valid." })
        } else {
          this.setState({ emailError: "" })
        }
      }
    }
  
    handleSubmit = (event) => {
     event.preventDefault()
      this.props.onRegister(this.state)

      this.setState({
        fullName: '',
        email: '',
        password: ''
      })
    }
      render () {
        return (
          <div className="card-back">
            <div className="center-wrap">
              <div className="section text-center">
                <h4 className="mb-4 pb-3">Sign Up</h4>
                <div className="form-group">
                  <input onChange={this.handleChange} type="text" value={this.state.fullName} name="fullName" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                  <i className="input-icon uil uil-user"></i>
                </div>	
                <div className="form-group mt-2">
                  <input onChange={this.handleChange} type="email" value={this.state.email} name="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                  <i className="input-icon uil uil-at"></i>
                  {this.state.emailError && (
                    <p className="text-danger small mt-1">{this.state.emailError}</p>
                  )}
                </div>	
                <div className="form-group mt-2">
                  <input onChange={this.handleChange} type="password" value={this.state.password} name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                  <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <a href="#" onClick={this.handleSubmit} className="btn mt-4">submit</a>
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
      users : [],
      loggedInUser: null,
      showModal: false,
      modalMessage: ''
    }
  }
  handleRegisterUser = (userData) => {
    this.setState(prev => ({
      users: [...prev.users, userData],
      isLogin: true
    }), () => {
      this.showModal(`Welcome ${userData.fullName}! You can now log in.`)
    })
  }

  handleLoginUser = (email, password) => {
    const foundUser = this.state.users.find(user => user.email === email && user.password === password)
    if (foundUser) {
      this.setState({ loggedInUser: foundUser }, () => {
        this.showModal(`Welcome back, ${foundUser.fullName}!`)
      })
    } else {

      this.showModal("Invalid email or password.")
    }
  }

  showModal = (message) => {
    this.setState({ showModal: true, modalMessage: message })
    setTimeout(() => {
      this.setState({ showModal: false, modalMessage: '' })
    }, 3000)
  }
  
  render() {
    return (
      <>
        {this.state.showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={() => this.setState({ showModal: false })}>&times;</span>
              <p>{this.state.modalMessage}</p>
              <button onClick={() => this.setState({ showModal: false })}>OK</button>
            </div>
          </div>
        )}
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
                          <LoginForm onLogin={this.handleLoginUser} />
                        ) : (
                          <SigninForm onRegister={this.handleRegisterUser} />
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
