import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Login extends Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className='wrapper'>
                <div className='login'>
                    <form className='login-form' >
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
                        <input type='submit' />
                    </form>
                    <Link to='/signup'><input type='button' value='Sign up' /></Link>
                </div>
            </div>
        )
    }
}