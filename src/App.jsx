import React, { Component } from 'react'
import './App.css'


export default class App extends Component {

  constructor (props) {
    super(props)

    this.handlerForm = this.handlerForm.bind(this)
    this.handlerFname = this.handlerFname.bind(this)
    this.handlerLname = this.handlerLname.bind(this)
    this.handlerEmail = this.handlerEmail.bind(this)
    
    this.state = {
      submitted: false,
      emailData: "",
      lastNameData: "",
      firstNameData: "",
    }
  }

  
  
  handlerForm (event) {
    event.preventDefault()
    console.log("Submitted");
    
    this.setState({submitted: true})
    
  }
  handlerFname (event) {
    this.setState({firstNameData: event.target.value})

  }
  handlerLname (event) {
    this.setState({lastNameData: event.target.value})
  }
  handlerEmail (event) {
    this.setState({emailData: event.target.value})
  }

  render() {
    const isFormValid =  this.state.firstNameData && this.state.lastNameData && this.state.emailData;

    return (
      <div className="form-container">
      <form className="register-form" autoComplete="off" onSubmit={this.handlerForm}>

          {this.state.submitted && isFormValid && (
            <div className="success-message">Success! Thank you for registering</div>
          )}

          <input id="first-name" className="form-field" type="text" placeholder="First Name" name="firstName" onChange={this.handlerFname}/>
          {this.state.firstNameData.length === 0 && this.state.submitted && (
            <span id="first-name-error">Please enter a first name</span>
          )}


          <input id="last-name" className="form-field" type="text" placeholder="Last Name" name="lastName" onChange={this.handlerLname}/>
          {this.state.lastNameData.length === 0 && this.state.submitted && (
            <span id="last-name-error">Please enter a last name</span>
          )}

          <input id="email" className="form-field" type="text" placeholder="Email" name="email" onChange={this.handlerEmail}/>
          {this.state.emailData.length === 0 && this.state.submitted && (
            <span id="email-error">Please enter an email address</span> 
          )}
          
          <button className="form-field" type="submit">
              Register
          </button>
      </form>
  </div>
    )
  }
}


