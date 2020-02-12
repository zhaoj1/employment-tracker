import React, {Component} from 'react';
import './App.css';

export default class UpdatePage extends Component{

    state = {
        title : '',
        location: '',
        application_info: '',
        interviewer: '',
        company_name: '',
        job_title: '',
        link: '',
        date_applied: null,
        date_of_interview: null,
        date_completed: null,
        date_of_meetup: null
    }

    componentDidMount(){
        if(this.props.currentPage == '/jobs'){
            this.setState({
                title: this.props.itemToUpdate.title,
                application_info: this.props.itemToUpdate.application_info,
                company_name: this.props.itemToUpdate.company_name,
                job_title: this.props.itemToUpdate.job_title,
                link: this.props.itemToUpdate.link,
                date_applied: this.props.itemToUpdate.date_applied
            })
        } else if(this.props.currentPage == '/interviews'){
            this.setState({
                title: this.props.itemToUpdate.title,
                interviewer: this.props.itemToUpdate.interviewer,
                company_name: this.props.itemToUpdate.company_name,
                job_title: this.props.itemToUpdate.job_title,
                link: this.props.itemToUpdate.link,
                date_of_interview: this.props.itemToUpdate.date_of_interview
            })
        } else if(this.props.currentPage == '/algorithms'){
            this.setState({
                title: this.props.itemToUpdate.title,
                date_completed: this.props.itemToUpdate.date_completed
            })
        } else if(this.props.currentPage == '/meetups'){
            this.setState({
                title: this.props.itemToUpdate.title,
                location: this.props.itemToUpdate.location,
                link: this.props.itemToUpdate.link,
                date_of_meetup: this.props.itemToUpdate.date_of_meetup
            })  
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.props.currentPage === '/jobs'){ 
            const updateJobs = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/jobs/${this.props.itemToUpdate.id}`, {
                method: 'PUT',
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
                    date_applied: new Date(document.getElementById('date').value),
                    user_id: this.props.currentUser.id
                })
            })
            if(updateJobs){
                this.props.fetchJobs();
            }
        } else if(this.props.currentPage === '/interviews'){ 
            const updateInterviews = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/interviews/${this.props.itemToUpdate.id}`, {
                method: 'PUT',
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
                    date_of_interview: new Date(document.getElementById('date').value),
                    user_id: this.props.currentUser.id
                })
            })
            if(updateInterviews){
                this.props.fetchInterviews();
            }
        }else if(this.props.currentPage === '/algorithms'){ 
            const updateAlgorithms = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/algos/${this.props.itemToUpdate.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    date_completed: new Date(document.getElementById('date').value),
                    user_id: this.props.currentUser.id
                })
            })
            if(updateAlgorithms){
                this.props.fetchAlgos();
            }
        }else if(this.props.currentPage === '/meetups'){ 
            const updateMeetups = await fetch(`http://localhost:3000/users/${this.props.currentUser.id}/meetups/${this.props.itemToUpdate.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    location: this.state.location,
                    link: this.state.link,
                    date_of_meetup: new Date(document.getElementById('date').value),
                    user_id: this.props.currentUser.id
                })
            })
            if(updateMeetups){
                this.props.fetchMeetups();
            }
        }
        this.props.closeModal();
    }

    render(){
        return(
            <div>
                <h1 className='addNewHeader'>Update {this.props.currentPage.slice(1,2).toUpperCase() + this.props.currentPage.slice(2,-1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.currentPage === '/jobs' ?
                        <>
                            <input
                                type='text'
                                name='title'
                                placeholder='Title'
                                className='newPageInput'
                                value={this.state.title}
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='application_info'
                                placeholder='Details'
                                className='newPageInput'
                                value={this.state.application_info}
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='company_name'
                                placeholder='Company Name'
                                className='newPageInput'
                                value={this.state.company_name}
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='job_title'
                                placeholder='Job Title'
                                className='newPageInput'
                                value={this.state.job_title}
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='link'
                                placeholder='Link'
                                className='newPageInput'
                                value={this.state.link}
                                onChange={this.handleChange}
                            >   
                            </input><br></br>
                            <input
                                type='date'
                                name='date_applied'
                                className='newPageInput'
                                value={this.state.date_applied}
                                onChange={this.handleChange}
                                id='date'
                            >
                            </input><br></br>
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
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='interviewer'
                                    placeholder='Interviewer'
                                    className='newPageInput'
                                    value={this.state.interviewer}
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='company_name'
                                    placeholder='Company Name'
                                    className='newPageInput'
                                    value={this.state.company_name}
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='job_title'
                                    placeholder='Job Title'
                                    className='newPageInput'
                                    value={this.state.job_title}
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='link'
                                    placeholder='Link'
                                    className='newPageInput'
                                    value={this.state.link}
                                    onChange={this.handleChange}
                                ></input><br></br>
                                <input
                                    type='date'
                                    name='date_of_interview'
                                    className='newPageInput'
                                    id='date'
                                    value={this.state.date_of_interview}
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
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
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                    >
                                    </input><br></br>
                                    <input
                                        type='date'
                                        name='date_completed'
                                        className='newPageInput'
                                        id='date'
                                        value={this.state.date_completed}
                                        onChange={this.handleChange}
                                    >
                                    </input><br></br>
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
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='location'
                                            placeholder='Location'
                                            className='newPageInput'
                                            value={this.state.location}
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='link'
                                            placeholder='Link'
                                            className='newPageInput'
                                            value={this.state.link}
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='date'
                                            name='date_of_meetup'
                                            className='newPageInput'
                                            id='date'
                                            value={this.state.date_of_meetup}
                                            onChange={this.handleChange}
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