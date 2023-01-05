import React from "react";
import AlbumItems from "./AlbumItems";

export class Albums extends React.Component {
    render() {
        return this.props.albums.map((album) => {
            return <AlbumItems album={album} key={album.name}></AlbumItems>
        });
    }
}
