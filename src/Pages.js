import React, {Component} from 'react';
import './App.css';

export default class Pages extends Component{

    render(){
        return(
            <div className='wrapper'>
                <div className='page'>
                    <h1>{this.props.page}</h1>
                    <button>list view</button><button>calendar view</button><br></br>
                    <div className='page-contents'>
                        <div className='page-left'>
                            line items
                        </div>
                        <div className='page-right'>
                            selected item info
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}