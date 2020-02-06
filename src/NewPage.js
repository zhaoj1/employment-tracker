import React, {Component} from 'react';
import './App.css';

export default class NewPage extends Component{

    render(){
        return(
            <div >
                <form>
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        className='newPageInput'
                    >
                    </input><br></br>
                    <input
                        type='text'
                        name='application_info'
                        placeholder='Details'
                        className='newPageInput'
                    >
                    </input><br></br>
                    <input
                        type='text'
                        name='company_name'
                        placeholder='Company Name'
                        className='newPageInput'
                    >
                    </input><br></br>
                    <input
                        type='text'
                        name='job_title'
                        placeholder='Job Title'
                        className='newPageInput'
                    >
                    </input><br></br>
                    <input
                        type='text'
                        name='link'
                        placeholder='Link'
                        className='newPageInput'
                    >   
                    </input><br></br>
                    <input
                        type='date'
                        name='date_applied'
                        className='newPageInput'
                    >
                    </input><br></br>
                    <input type='submit' className='buttons' ></input>
                </form>
            </div>
        )
    }
}