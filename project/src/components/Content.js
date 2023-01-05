import React, { Component } from 'react';
import { Albums } from './Albums';


export class Content extends Component {

    //Testing Pre Server
    state = {
        albums: [
            {
                "name": "To Pimp A Butterfly",
                "artist": "Kendrick Lamar",
                "artURL": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/11/1426099817173/f1efb3f4-9a6d-4f78-8ca8-594ab646d198-bestSizeAvailable.jpeg?width=700&quality=85&dpr=1&s=none",
                "year": 2015,
                "rating": 9
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Component For Main Content</h1>
                <Albums albums={this.state.albums}></Albums>
            </div>
        );
    }
}