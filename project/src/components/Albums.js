import React from "react";
import AlbumItems from "./AlbumItems";

export class Albums extends React.Component {
    //Takes the given albums and maps each to it's own album before passing on to albumItems
    render() {
        return this.props.albums.map((album) => {
            return <AlbumItems album={album} key={album._id}></AlbumItems>
        });
    }
}
