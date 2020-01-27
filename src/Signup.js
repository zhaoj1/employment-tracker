import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Signup extends Component{

    render(){
        return(
            <div className='wrapper'>
                <div className='login'>
                    <form className='signup-form'>
                        <input type='text' name='username' placeholder='Username' required /><br></br>
                        <input type='password' name='password' placeholder='Password' required /><br></br>
                        <input type='password' name='password-confirm' placeholder='Confirm Password' required /><br></br>
                        <input type='submit' value='Create New Account' />
                    </form>
                </div>
            </div>
        )
    }
}