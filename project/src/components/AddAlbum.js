import React from "react";
import axios from "axios";

export class AddAlbum extends React.Component {

    constructor() {
        //call the parent constructor
        super();
        //bind each of the events to this event
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeAlbumName = this.onChangeAlbumName.bind(this);
        this.onChangeAlbumArt = this.onChangeAlbumArt.bind(this);
        this.onChangeAlbumArtist = this.onChangeAlbumArtist.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);

        //create a state that will take the data entered
        this.state = {
            name: '',
            artURL: '',
            artist: '',
            year: 0,
            rating: 0
        }
    }

    //create a function to handle the imput button in our form and bind it in the constructor
    handleSubmit(e) {
        e.preventDefault();
        //display the states values on error
        console.log(`${this.state.name},${this.state.artURL},${this.state.artist}`);

        const album = {
            name: this.state.name,
            artist: this.state.artist,
            artURL: this.state.artURL,
            year: this.state.year,
            rating: this.state.rating

        }

        axios.post('http://localhost:4000/api/albums', album)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data))
        this.setState({
            name: '',
            artURL: '',
            artist: '',
            year: 0,
            rating: 0
        })
    }
    
    //title change event
    onChangeAlbumName(e) {
        this.setState({
            name: e.target.value
        })
    }
    //author change event
    onChangeAlbumArtist(e) {
        this.setState({
            artist: e.target.value
        })
    }
    //cover change event
    onChangeAlbumArt(e) {
        this.setState({
            artURL: e.target.value
        })
    }
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    render() {



        return (
            <div>
                <h1>Hello from Create Component.</h1>

                {/* create form with a submission button link it to the handleSubmit function
                    for each element that you wish to add we add a new div with its own event
                    for author title and cover to be changed when it is typed in
                    submission button can then be clicked for submitting the book
                */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Album Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeAlbumName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Album Art: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.artURL}
                            onChange={this.onChangeAlbumArt}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Artist Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.artist}
                            onChange={this.onChangeAlbumArtist}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Personal Rating, 10 Max: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeRating}
                        />
                    </div>

                    <input type="submit" value="Add Album" />
                </form>
            </div>

        );
    }
}