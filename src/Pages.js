import React, {Component} from 'react';
import './App.css';
import LineItems from './LineItems'
import Details from './Details'

export default class Pages extends Component{

    render(){
        return(
                <div className='page'>
                    {!this.props.currentUser ? 
                        this.props.history.push('/')
                        :
                        <>
                            <div className='page-title'>{this.props.page.toUpperCase()}</div>
                            <div className='page-contents'>
                                <div className='page-left'>
                                    {this.props.userSaved.length == 0 ?
                                        null
                                        :
                                        this.props.userSaved.map(ele => {
                                            return < LineItems
                                                currentPage={this.props.currentPage}
                                                openModal={this.props.openModal}
                                                item={ele}
                                                setSelectedLineItem={this.props.setSelectedLineItem}
                                                setItemToUpdate={this.props.setItemToUpdate} 
                                                currentPage={this.props.currentPage} 
                                            />
                                        })
                                    }
                                    <div className='addItemBtn' onClick={this.props.openModal}>
                                        <span className='plus'>+</span>
                                    </div>
                                </div>

                                {!this.props.selectedLineItem? 
                                    null
                                    :
                                    <div className={'page-right'}>
                                        < Details 
                                            page={this.props.page}
                                            selectedLineItem={this.props.selectedLineItem}
                                            currentUser={this.props.currentUser}
                                            currentPage={this.props.currentPage}
                                            modalIsOpen={this.props.modalIsOpen}
                                            setSelectedLineItem={this.props.setSelectedLineItem}
                                            openNoteModal={this.props.openNoteModal}
                                            setItemToUpdate={this.props.setItemToUpdate} 
                                            notes={this.props.notes}
                                            fetchInfo={this.props.fetchInfo}
                                            openDeleteModal={this.props.openDeleteModal}
                                        />
                                    </div>
                                }
                               
                            </div>
                        </>
                    }
                </div>
        )
    }
}