import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Login extends Component{

    render(){
        return(
            <div className='wrapper'>
                <div className='login'>
                    <form className='login-form'>
                        <input type='text' name='username' placeholder='Username' required /><br></br>
                        <input type='password' name='password' placeholder='Password' required /><br></br>
                        <input type='submit' />
                    </form>
                    <Link to='/signup'><input type='button' value='Sign up' /></Link>
                </div>
            </div>
        )
    }
}