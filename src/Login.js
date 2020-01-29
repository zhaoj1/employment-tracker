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

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     fetch(`http://localhost:3000/login`,{
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         'Accept': "application/json"
    //       },
    //       body: JSON.stringify(this.state)
    //     })
    //     .then(res => res.json())
    //     .then(response => {
    //       if (response.errors){
    //         alert('Username or Password incorrect')
    //       } else {
    //         this.props.setCurrentUser(response.user)
    //         this.props.history.push('./main')
    //       }
    //     })
    // }

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