import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Very similar to the add Album Page but instead of loading all fields empty it loads a page specific to the selected albums Id
//The page is then populated with the current data of the album
//The data can then be edited and submitted to change the album on the albums page and the mongoDB

export function EditAlbum() {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [artURL, setArtURL] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/albums/'+id)
            .then((response) => {
                setName(response.data.name);
                setArtist(response.data.artist);
                setArtURL(response.data.artURL);
                setYear(response.data.year);
                setRating(response.data.rating);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const editAlbum = {
            name: name,
            artist: artist,
            artURL: artURL,
            year: year,
            rating: rating
        }

        axios.put('http://localhost:4000/api/albums/' + id, editAlbum)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit Album Component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Album Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Album Art: </label>
                    <input type="text"
                        className="form-control"
                        value={artURL}
                        onChange={(e) => setArtURL(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Artist Name: </label>
                    <input type="text"
                        className="form-control"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Personal Rating, 10 Max: </label>
                    <input type="text"
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Edit Album" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}