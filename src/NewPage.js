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
                    >
                    </input>
                    <input
                        type='text'
                        name='application_info'
                        placeholder='Details'
                    >
                    </input>
                    <input
                        type='text'
                        name='company_name'
                        placeholder='Company Name'
                    >
                    </input>
                    <input
                        type='text'
                        name='job_title'
                        placeholder='Job Title'
                    >
                    </input>
                    <input
                        type='text'
                        name='link'
                        placeholder='Link'
                    >   
                    </input>
                    <input
                        type='date'
                        name='date_applied'
                    >
                    </input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}