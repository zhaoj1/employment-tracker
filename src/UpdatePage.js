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
        link: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        
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
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='application_info'
                                placeholder='Details'
                                className='newPageInput'
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='company_name'
                                placeholder='Company Name'
                                className='newPageInput'
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='job_title'
                                placeholder='Job Title'
                                className='newPageInput'
                                onChange={this.handleChange}
                            >
                            </input><br></br>
                            <input
                                type='text'
                                name='link'
                                placeholder='Link'
                                className='newPageInput'
                                onChange={this.handleChange}
                            >   
                            </input><br></br>
                            <input
                                type='date'
                                name='date_applied'
                                className='newPageInput'
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
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='interviewer'
                                    placeholder='Interviewer'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='company_name'
                                    placeholder='Company Name'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='job_title'
                                    placeholder='Job Title'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                >
                                </input><br></br>
                                <input
                                    type='text'
                                    name='link'
                                    placeholder='Link'
                                    className='newPageInput'
                                    onChange={this.handleChange}
                                ></input><br></br>
                                <input
                                    type='date'
                                    name='date_of_interview'
                                    className='newPageInput'
                                    id='date'
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
                                        onChange={this.handleChange}
                                    >
                                    </input><br></br>
                                    <input
                                        type='date'
                                        name='date_completed'
                                        className='newPageInput'
                                        id='date'
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
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='location'
                                            placeholder='Location'
                                            className='newPageInput'
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='text'
                                            name='link'
                                            placeholder='Link'
                                            className='newPageInput'
                                            onChange={this.handleChange}
                                        ></input><br></br>
                                        <input
                                            type='date'
                                            name='date_of_meetup'
                                            className='newPageInput'
                                            id='date'
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