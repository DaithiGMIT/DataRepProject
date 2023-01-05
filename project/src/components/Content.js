import React, { Component } from 'react';
import { Albums } from './Albums';
//importing Axios to read from http
import axios from "axios";



export class Content extends Component {

    constructor() {
        super();
        //All Data for the class is stored in the state
        //initialises a default empty state
        this.state = {
          albums: []
        }
      }

    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                this.setState({ albums:response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1>Component For Main Content</h1>
                <Albums albums={this.state.albums}></Albums>
            </div>
        );
    }
}