import React, {Component} from 'react';
import './App.css';
import NoteLineItem from './NoteLineItem'

export default class Details extends Component{

    componentDidUpdate(prevProps){
        if(prevProps.modalIsOpen !== this.props.modalIsOpen){
            this.props.setSelectedLineItem(null)}
        }

    render(){
        return(
            <>
                {this.props.page === 'jobs' ? 
                    <div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.application_info}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.company_name}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.job_title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.date_applied}</div>
                    </div>
                :
                this.props.page === 'interviews' ?
                    <div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.interviewer}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.company_name}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.job_title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.date_of_interview}</div>
                    </div>
                :
                this.props.page === 'algorithms' ?
                    <div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.date_completed}</div>
                    </div>
                :
                this.props.page === 'meetups' ?
                    <div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.title}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.location}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.link}</div>
                        <div className='detail-line-item'>{this.props.selectedLineItem.date_of_meetup}</div>
                    </div>
                : null
                }
                <div className='notes'>
                    <span className='note-title'>Notes</span>
                    {this.props.notes.filter(note => note.page_type == this.props.currentPage && note.page_id == this.props.selectedLineItem.id).map(note => {
                        return <NoteLineItem note={note} />
                    })}
                    <div className='addItemBtn' onClick={() => this.props.openNoteModal(this.props.selectedLineItem)}>+</div>
                </div>
                <button onClick={() => this.props.openDeleteModal(this.props.selectedLineItem)}>DELETE</button>
            </>
        )
    }
}