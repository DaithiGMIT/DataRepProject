import React from "react";
import axios from "axios";

export class AddAlbum extends React.Component {

    constructor() {
        //call the parent constructor
        super();
        //bind each of the events to this
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
        //Bind given details
        const album = {
            name: this.state.name,
            artist: this.state.artist,
            artURL: this.state.artURL,
            year: this.state.year,
            rating: this.state.rating

        }
        //Proceed to add the new data to the database
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
    
    //name change event
    onChangeAlbumName(e) {
        this.setState({
            name: e.target.value
        })
    }
    //artist change event
    onChangeAlbumArtist(e) {
        this.setState({
            artist: e.target.value
        })
    }
    //album art url change event
    onChangeAlbumArt(e) {
        this.setState({
            artURL: e.target.value
        })
    }
    //Year change event
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    //rating change event
    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    render() {



        return (
            <div>
                <h1>Please Enter New Albums Details.</h1>

                {/* using a form we intake the needed information and pass it on once the submit has been clicked*/}
                
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