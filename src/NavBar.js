import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default class NavBar extends Component{

    render(){
        return(
            <div className='navbar'>
                <div className='navbar-items'>
                    <Link 
                        to={this.props.currentUser? '/profile' : '/' }
                    ><label className='title'>logo</label></Link>
                    <div className='nav-btns-container'>
                        {this.props.currentUser ? 
                            <div>
                                <Link to='/profile' className='nav-btns'>profile</Link>
                                <Link to='/jobs' className='nav-btns'>jobs</Link>
                                <Link to='/interviews' className='nav-btns'>interviews</Link>
                                <Link to='/meetups' className='nav-btns'>meetups</Link>
                                <Link to='/algorithms' className='nav-btns'>algorithms</Link>
                                <Link to='/logout' className='nav-btns'>logout</Link>
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