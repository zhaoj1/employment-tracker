import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'
import Details from './Details'

export default class Pages extends Component{

    render(){
        return(
            <div className='wrapper'>
                <div className='page'>
                    <h1>{this.props.page}</h1>
                    <button>list view</button><button>calendar view</button><br></br>
                    <div className='page-contents'>
                        <div className='page-left'>
                            < LineItems />
                        </div>
                        <div className='page-right'>
                            < Details />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}