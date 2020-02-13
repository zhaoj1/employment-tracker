import React, {Component} from 'react';
import './App.css';

export default class Details extends Component{

    componentDidUpdate(prevProps){
        if(prevProps.modalIsOpen !== this.props.modalIsOpen){
            this.props.setSelectedLineItem({})}
        }

    render(){
        return(
            <>
                {this.props.page === 'jobs' ? 
                    <div>
                        <div className='line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.application_info}</div>
                        <div className='line-item'>{this.props.selectedLineItem.company_name}</div>
                        <div className='line-item'>{this.props.selectedLineItem.job_title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='line-item'>{this.props.selectedLineItem.date_applied}</div>
                    </div>
                :
                this.props.page === 'interviews' ?
                    <div>
                        <div className='line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.interviewer}</div>
                        <div className='line-item'>{this.props.selectedLineItem.company_name}</div>
                        <div className='line-item'>{this.props.selectedLineItem.job_title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='line-item'>{this.props.selectedLineItem.date_of_interview}</div>
                    </div>
                :
                this.props.page === 'algorithms' ?
                    <div>
                        <div className='line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='line-item'>{this.props.selectedLineItem.date_completed}</div>
                    </div>
                :
                this.props.page === 'meetups' ?
                    <div>
                        <div className='line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='line-item'>{this.props.selectedLineItem.location}</div>
                        <div className='line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='line-item'>{this.props.selectedLineItem.date_of_meetup}</div>
                    </div>
                : null
                }
                <div className='notes'>
                    notes
                    {/* <LineItems /> */}
                    <div className='addItemBtn' onClick={this.props.openNoteModal}>+</div>
                </div>
            </>
        )
    }
}