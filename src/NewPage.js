import React, {Component} from 'react';
import './App.css';

export default class NewPage extends Component{

    state = {
        title : '',
        location: '',
        application_info: '',
        interviewer: '',
        company_name: '',
        job_title: '',
        link: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        if(this.props.currentPage === '/jobs'){ 
            const postJobs = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    application_info: this.state.application_info,
                    company_name: this.state.company_name,
                    job_title: this.state.job_title,
                    link: this.state.link,
                    date_of: document.getElementById('date').value,
                    user_id: this.props.currentUser.id
                })
            })
            if(postJobs){
                this.props.fetchJobs();
            }
        } else if (this.props.currentPage === '/interviews'){
            const postInterviews = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/interviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    interviewer: this.state.interviewer,
                    company_name: this.state.company_name,
                    job_title: this.state.job_title,
                    link: this.state.link,
                    date_of: document.getElementById('date').value,
                    user_id: this.props.currentUser.id
                })
            })
            if(postInterviews){
                this.props.fetchInterviews();
            }
        } else if(this.props.currentPage === '/algorithms'){
            const postAlgorithms = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/algorithms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    date_of: document.getElementById('date').value,
                    user_id: this.props.currentUser.id
                })
            })
            if(postAlgorithms){
                this.props.fetchAlgorithms();
            }
        } else if(this.props.currentPage === '/meetups'){
            const postMeetups = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/meetups`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    location: this.state.location,
                    link: this.state.link,
                    date_of: document.getElementById('date').value,
                    user_id: this.props.currentUser.id
                })
            })
            if(postMeetups){
                this.props.fetchMeetups();
            }
        }
        this.props.closeModal();
    }

    render(){
        return(
            <div>
                <h1 className='addNewHeader'>Add New {this.props.currentPage.slice(1,2).toUpperCase() + this.props.currentPage.slice(2,-1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.currentPage === '/jobs' ?
                        <>
                            <input
                                type='text'
                                name='title'
                                placeholder='Title'
                                className='newPageInput'
                                onChange={this.handleChange}
                                required
                            ></input><br></br>
                            <textarea
                                name='application_info'
                                placeholder='Details'
                                className='newPageInput'
                                row='5'
                                onChange={this.handleChange}
                                required
                            ></textarea><br></br>
                            <input
                                type='text'
                                name='company_name'
                                placeholder='Company Name'
                                className='newPageInput'
                                onChange={this.handleChange}
                                required
                            ></input><br></br>
                            <input
                                type='text'
                                name='job_title'
                                placeholder='Job Title'
                                className='newPageInput'
                                onChange={this.handleChange}
                                required
                            ></input><br></br>
                            <input
                                type='text'
                                name='link'
                                placeholder='Link'
                                className='newPageInput'
                                onChange={this.handleChange}
                                required
                            ></input><br></br>
                            <input
                                type='date'
                                name='date_of'
                                className='newPageInput'
                                id='date'
                                required
                            ></input><br></br>
                            <input type='submit' className='buttons'></input>
                        </>
                        :
                        this.props.currentPage === '/interviews' ?
                            <>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                    required
                                ></input><br></br>
                                <input
                                    type='text'
                                    name='interviewer'
                                    placeholder='Interviewer'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                    required
                                ></input><br></br>
                                <input
                                    type='text'
                                    name='company_name'
                                    placeholder='Company Name'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                    required
                                ></input><br></br>
                                <input
                                    type='text'
                                    name='job_title'
                                    placeholder='Job Title'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                    required
                                ></input><br></br>
                                <input
                                    type='text'
                                    name='link'
                                    placeholder='Link'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                    required
                                ></input><br></br>
                                <input
                                    type='date'
                                    name='date_of'
                                    className='newPageInput'
                                    id='date'
                                    required
                                ></input><br></br>
                                <input type='submit' className='buttons' ></input>
                            </>
                            :
                            this.props.currentPage === '/algorithms' ?
                                <>
                                    <input
                                        type='text'
                                        name='title'
                                        placeholder='Title'
                                        className='newPageInput'
                                        onChange={this.handleChange}
                                        required
                                    ></input><br></br>
                                    <input
                                        type='date'
                                        name='date_of'
                                        className='newPageInput'
                                        id='date'
                                        required
                                    ></input><br></br>
                                    <input type='submit' className='buttons' ></input>
                                </>
                                :
                                this.props.currentPage === '/meetups' ?
                                    <>
                                        <input
                                            type='text'
                                            name='title'
                                            placeholder='Title'
                                            className='newPageInput'
                                            onChange={this.handleChange}
                                            required
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='location'
                                            placeholder='Location'
                                            className='newPageInput'
                                            onChange={this.handleChange}
                                            required
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='link'
                                            placeholder='Link'
                                            className='newPageInput'
                                            onChange={this.handleChange}
                                            required
                                        ></input><br></br>
                                        <input
                                            type='date'
                                            name='date_of'
                                            className='newPageInput'
                                            id='date'
                                            required
                                        >
                                        </input><br></br>
                                        <input type='submit' className='buttons' ></input>
                                    </>
                                    :
                                    null
                    }
                </form>
            </div>
        )
    }
}