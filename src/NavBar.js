import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

export default class NavBar extends Component{

    render(){
        return(
            <div className='navbar'>
                <div className='navbar-items'>
                    <Link 
                        to={this.props.currentUser? '/profile' : '/' }
                    ><label className='title'>LOGO</label></Link>
                    <div className='nav-btns-container'>
                        {this.props.currentUser ? 
                            <div>
                                <Link to='/profile' 
                                    className='nav-btns' 
                                    onClick={() => this.props.setPage('/profile')}
                                >Profile</Link>
                                <Link to='/jobs' 
                                    className='nav-btns' 
                                    onClick={() => this.props.setPage('/jobs')}
                                >Jobs</Link>
                                <Link to='/interviews' 
                                    className='nav-btns' 
                                    onClick={() => this.props.setPage('/interviews')}
                                >Interviews</Link>
                                <Link to='/meetups' 
                                    className='nav-btns' 
                                    onClick={() => this.props.setPage('/meetups')}
                                >Meetups</Link>
                                <Link to='/algorithms' 
                                    className='nav-btns' 
                                    onClick={() => this.props.setPage('/algorithms')}
                                >Algorithms</Link>
                                <Link to='/' 
                                    className='nav-btns' 
                                    onClick={()=>this.props.logout()} 
                                >Logout</Link>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}