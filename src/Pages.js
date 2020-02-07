import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'
import Details from './Details'

export default class Pages extends Component{

    state = {
        selectedLineItem: {}
    }

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
                                    {this.props.userSaved === [] ?
                                        null
                                        :
                                        this.props.userSaved.map(ele => {
                                            return < LineItems currentPage={this.props.currentPage} openModal={this.props.openModal} item={ele} />
                                        })
                                    }
                                    <div className='addItemBtn' onClick={this.props.openModal}>
                                        <span className='plus'>+</span>
                                    </div>
                                </div>
                                <div className='page-right'>
                                    {this.state.selectedLineItem === {} ?
                                        null
                                        :
                                        < Details page={this.props.page} selectedLineItem={this.state.selectedLineItem} />
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
        )
    }
}