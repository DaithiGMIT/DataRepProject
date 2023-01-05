import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
class AlbumItems extends React.Component {
    render() {
        return (
            <div >
                <Card>
                    <Card.Header>
                        <h2>{this.props.album.name}</h2>
                    </Card.Header>
                    <Card.Body>
                        <img src={this.props.album.artURL} height="200" width="200" />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default AlbumItems;