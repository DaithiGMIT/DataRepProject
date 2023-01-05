import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from "react-router-dom";
import Button  from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


class AlbumItems extends React.Component {
    constructor(){
        super();
        this.DeleteAlbum = this.DeleteAlbum.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }
    

    DeleteAlbum(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/albums/'+this.props.album._id)
        .then((res)=>{this.refreshPage();})
        .catch();
    }

    refreshPage(e) {
        window.location.reload(false);
      }
    
    render() {
        return (
            <div >
                <Card>
                    <Card.Header>
                        <h2>{this.props.album.name}</h2>
                    </Card.Header>
                    <Card.Body>
                        <img src={this.props.album.artURL} height="200" width="200" />
                        <Link to={'/albums/'+this.props.album._id} className="btn btn-primary">Edit</Link>
                        <Link to={'/albums/'} onClick={this.DeleteAlbum} className="btn btn-primary">Delete</Link>
                    </Card.Body>
                    
                </Card>
            </div>
        );
    }
}
export default AlbumItems;