import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Login extends Component{

    state = {
        username: '',
        password: '',
        isLoading: false
    }

    componentDidMount(){
        this.props.clearError()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://employment-tracker-backend.herokuapp.com/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(response => {
            if (response.errors){
                this.props.setError('Username or Password incorrect.');
            } else {
                this.setState({isLoading: true})
                this.props.setCurrentUser(response.user);
                this.props.history.push('/profile');
                this.props.clearError();
            }
        })   
        
        this.setState({isLoading: false})
    }

    render(){
        return(
            <div className='wrapper'>
                <h1>LOGIN</h1>
                <div className='login'>
                    <form className='login-form' onSubmit={this.handleSubmit}>
                        {this.state.isLoading ?
                            <p>Loading...</p>
                        :
                            <>
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
                                <input type='submit' className='buttons'  /><br></br>
                                <Link to='/signup'><input type='button' value='Sign up' className='buttons' /></Link><br></br>
                            </>
                        }
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