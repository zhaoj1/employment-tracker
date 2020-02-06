import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'
import Details from './Details'

export default class Pages extends Component{

    // componentDidMount = () =>{
    //     this.props.setPage(this.props.history.location.pathname)
    // }

    render(){
        return(
                <div className='page'>
                    {!this.props.currentUser ? 
                        this.props.history.push('/')
                        :
                        <>
                            <h1>{this.props.page}</h1>
                            <div className='page-contents'>
                                <div className='page-left'>
                                    < LineItems currentPage={this.props.currentPage} openModal={this.props.openModal} />
                                    <div className='addItemBtn' onClick={this.props.openModal}>+</div>
                                </div>
                                <div className='page-right'>
                                    < Details page={this.props.page} />
                                </div>
                            </div>
                        </>
                    }
                </div>
        )
    }
}