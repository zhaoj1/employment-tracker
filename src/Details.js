import React, {Component} from 'react';
import './App.css';
import NoteLineItem from './NoteLineItem'

export default class Details extends Component{

    componentDidUpdate(prevProps){
        if(prevProps.modalIsOpen !== this.props.modalIsOpen){
            this.props.setSelectedLineItem(null)}
        }

        calculateTime = (time) => {
            var preFormattedTime = time.split('T')[0]
            var minutes = preFormattedTime.split(':')[1]
            var AMPM, hours
            if(preFormattedTime.split(':')[0] < 12){
                AMPM = 'AM'
                if(preFormattedTime.split(':')[0] == '00'){
                    hours = 12
                } else {
                    hours = preFormattedTime.split(':')[0]
                }
            }else{
                AMPM = 'PM'
                if(preFormattedTime.split(':')[0] == '12'){
                    hours = 12
                } else if(preFormattedTime.split(':')[0] > '12'){
                    hours = parseInt(preFormattedTime.split(':')[0]) - 12
                } else if(preFormattedTime.split(':')[0] < '12'){
                    hours = parseInt(preFormattedTime.split(':')[0])
                }
            }
            return hours + ':' + minutes + ' ' + AMPM
        }

    render(){
        return(
            <>
                {this.props.page === 'jobs' ? 
                    <div>
                        <div className='detail-line-item' style={{'font-weight':'bold', 'justify-content':'center', 'border-style':'solid'}}>
                            {this.props.selectedLineItem.title}
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Application Info:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.application_info}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Company Name:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.company_name}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Job Title:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.job_title}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Link:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.link}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Date Applied:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.date_of}
                            </div>
                        </div>
                    </div>
                :
                this.props.page === 'interviews' ?
                    <div>
                        <div className='detail-line-item' style={{'font-weight':'bold', 'justify-content':'center', 'border-style':'solid'}}>
                            {this.props.selectedLineItem.title}
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Interviewer:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.interviewer}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Company Name:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.company_name}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Job Title:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.job_title}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Link:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.link}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Date of Interview:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.date_of}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Time:
                            </div>
                            <div className='detail-info'>
                                {this.calculateTime(this.props.selectedLineItem.time_of.split('T')[1].slice(0,5))}
                            </div>
                        </div>
                    </div>
                :
                this.props.page === 'algorithms' ?
                    <div>
                        <div className='detail-line-item' style={{'font-weight':'bold', 'justify-content':'center', 'border-style':'solid'}}>
                            {this.props.selectedLineItem.title}
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Date Completed:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.date_of}
                            </div>
                        </div>
                    </div>
                :
                this.props.page === 'meetups' ?
                    <div>
                        <div className='detail-line-item' style={{'font-weight':'bold', 'justify-content':'center', 'border-style':'solid'}}>
                            {this.props.selectedLineItem.title}
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Location:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.location}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Link:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.link}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Date of Meetup:
                            </div>
                            <div className='detail-info'>
                                {this.props.selectedLineItem.date_of}
                            </div>
                        </div>
                        <div className='detail-line-item'>
                            <div className='detail-label'>
                                Time:
                            </div>
                            <div className='detail-info'>
                                {this.calculateTime(this.props.selectedLineItem.time_of.split('T')[1].slice(0,5))}  
                            </div>
                        </div>
                    </div>
                : null
                }
                <div className='notes'>
                    <span className='note-title'>Notes</span>
                    {this.props.notes.filter(note => note.page_type == this.props.currentPage && note.page_id == this.props.selectedLineItem.id).map(note => {
                        return <NoteLineItem note={note} currentUser={this.props.currentUser} fetchInfo={this.props.fetchInfo} />
                    })}
                    <div className='addItemBtn' onClick={() => this.props.openNoteModal(this.props.selectedLineItem)}>+</div>
                </div>
                <button className='buttons' onClick={() => this.props.openDeleteModal(this.props.selectedLineItem)}>DELETE</button>
            </>
        )
    }
}