import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Signup extends Component{

    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
            .then(response => {
                if (response.errors){
                    alert(response.errors)
                } else {
                    console.log(response)
                    // this.props.setCurrentUser(response.user)
                    this.props.history.push('/main')
                }
        })
        
    }

    render(){
        return(
            <div className='wrapper'>
                {console.log(this.state)}
                <div className='login'>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            required 
                        /><br></br>
                        <input 
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                            value={this.state.password}
                            onChange={this.handleChange}
                            required 
                        /><br></br>
                        <input 
                            type='password' 
                            name='passwordConfirm' 
                            placeholder='Confirm Password' 
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                            required 
                        /><br></br>
                        <input type='submit' value='Create New Account' />
                    </form>
                </div>
            </div>
        )
    }
}