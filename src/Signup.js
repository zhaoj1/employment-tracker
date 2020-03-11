import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Signup extends Component{

    state = {
        username: '',
        password: '',
        passwordConfirm: ''
    }

    componentDidMount(){
        this.props.clearError();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.password === this.state.passwordConfirm){
            fetch('http://localhost:3000/signup', {
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
                        this.props.setError('Username has already been taken.')
                    } else {
                        this.props.clearError()
                        this.props.setCurrentUser(response.user)
                        this.props.history.push('/profile')
                    }
            })
        }
        else{
            this.props.setError('Passwords must match.')
        }
    }

    render(){
        return(
            <div className='wrapper'>
                <div className='login'>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            required 
                            className='input'
                        /><br></br>
                        <input 
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                            value={this.state.password}
                            onChange={this.handleChange}
                            required 
                            className='input'
                        /><br></br>
                        <input 
                            type='password' 
                            name='passwordConfirm' 
                            placeholder='Confirm Password' 
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                            required 
                            className='input'
                        /><br></br>
                        <input type='submit' value='Create' className='buttons' /><br></br>
                        <Link to='/'><input type='button' value='Back' className='buttons' /></Link><br></br>
                        {this.props.error == '' ?
                            null
                            :
                            <>
                                <label className='error'>{this.props.error}</label>
                            </>
                        }
                    </form>
                </div>
            </div>
        )
    }
}