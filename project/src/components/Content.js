import React, { Component } from 'react';
import { Albums } from './Albums';
//importing Axios to read from http
import axios from "axios";



export class Content extends Component {

    constructor() {
        super();
        //initialises a default empty state
        this.state = {
            albums: []
        }
    }
    //when component loads recieves the albums datafrom the address and binds it to the empty albums array
    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                this.setState({ albums: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //Then Passes the Albums array to the album page and calls it
    render() {
        return (
            <div calssName='contentMain'>
                <h1>Albums</h1>
                <div className='cardDisplay'>
                    <Albums albums={this.state.albums}></Albums>
                </div>
            </div>
        );
    }
}