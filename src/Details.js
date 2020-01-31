import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'

export default class Details extends Component{

    render(){
        return(
            <>
                {this.props.page === 'jobs' ? 
                    <div>
                        <div className='line-item'>title</div>
                        <div className='line-item'>application info</div>
                        <div className='line-item'>company</div>
                        <div className='line-item'>job title</div>
                        <div className='line-item'>link</div>
                        <div className='line-item'>date applied</div>
                    </div>
                :
                this.props.page === 'interviews' ?
                    <div>
                        <div className='line-item'>title</div>
                        <div className='line-item'>company</div>
                        <div className='line-item'>job title</div>
                        <div className='line-item'>interviewer</div>
                        <div className='line-item'>date of interview</div>
                        <div className='line-item'>link</div>
                    </div>
                :
                this.props.page === 'algorithms' ?
                    <div>
                        <div className='line-item'>topic</div>
                        <div className='line-item'>date completed</div>
                        <div className='line-item'>link</div>
                    </div>
                :
                this.props.page === 'meetups' ?
                    <div>
                        <div className='line-item'>topic</div>
                        <div className='line-item'>location</div>
                        <div className='line-item'>date of meetup</div>
                    </div>
                : null
                }
                <div className='notes'>
                    notes
                    <LineItems />
                </div>
            </>
        )
    }
}