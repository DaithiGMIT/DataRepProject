//Imports
import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from "react-router-dom";


class AlbumItems extends React.Component {
    constructor() {
        super();
        //Bind functions to this
        this.DeleteAlbum = this.DeleteAlbum.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    //Function to delete from the databse and refresh the page after deletion
    DeleteAlbum(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/albums/' + this.props.album._id)
            .then((res) => { this.refreshPage(); })
            .catch();
    }
    //Had to create a function to refresh the page after deletion as was having trouble with an error trying to do it with {this.props.Reload();}
    refreshPage(e) {
        window.location.reload(false);
    }

    //Render Displays Card to the specifications given Header as the album name and side by side img and info divs
    render() {
        return (
            <div>
                <Card className='cardSingle'>
                    <Card.Header className='cardHeader'>
                        <h2>{this.props.album.name}</h2>
                    </Card.Header>
                    <Card.Body className='cardBody'>
                        <div>
                            <img className="albumImg" src={this.props.album.artURL} height="200" width="200" />
                        </div>
                        <div className='cardInfo'>
                            <h4>Artist: {this.props.album.artist}</h4>
                            <h4>Release Year: {this.props.album.year}</h4>
                            <h4>Rating: {this.props.album.rating}/10</h4>
                            <Link to={'/albums/' + this.props.album._id} className="btn btn-primary">Edit</Link>
                            <br/>
                            <Link to={'/albums/'} onClick={this.DeleteAlbum} className="btn btn-danger">Delete</Link>
                        </div>
                    </Card.Body>

                </Card>
            </div>
        );
    }
}
export default AlbumItems;