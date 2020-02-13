import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'
import Details from './Details'

export default class Pages extends Component{

    constructor(){
        super();
        this.state = {
            selectedLineItem: {},
            notes: []
        }
        this.setSelectedLineItem = this.setSelectedLineItem.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentPage !== this.props.currentPage){
            this.setState({
                selectedLineItem: {}
            })
        }
    }

    fetchNotes = () => {
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}${this.props.currentPage}/${this.state.selectedLineItem.id}/notes`)
        .then(res => res.json())
        .then(response => {
            this.setState({
                notes: [...response]
            })
        })
      }

    setSelectedLineItem = (item) => {
        this.setState({selectedLineItem: item}, () => {this.fetchNotes()})
    }

    render(){
        return(
                <div className='page'>
                    {!this.props.currentUser ? 
                        this.props.history.push('/')
                        :
                        <>
                            <h1>{this.props.page}</h1>
                            <div className='page-contents'>
                                <div className='page-left'>
                                    {this.props.userSaved === [] ?
                                        null
                                        :
                                        this.props.userSaved.map(ele => {
                                            return < LineItems currentPage={this.props.currentPage} openModal={this.props.openModal} item={ele} setSelectedLineItem={this.setSelectedLineItem}  setItemToUpdate={this.props.setItemToUpdate} />
                                        })
                                    }
                                    <div className='addItemBtn' onClick={this.props.openModal}>
                                        <span className='plus'>+</span>
                                    </div>
                                </div>
                                <div className={'page-right'}>
                                    {< Details page={this.props.page} selectedLineItem={this.state.selectedLineItem} modalIsOpen={this.props.modalIsOpen} setSelectedLineItem={this.setSelectedLineItem} openNoteModal={this.props.openNoteModal} setItemToUpdate={this.props.setItemToUpdate} />}
                                </div>
                            </div>
                        </>
                    }
                </div>
        )
    }
}