import React from "react";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ albums, highlightedAlbum, setHighlightedAlbum }) {
    return (
        <div className="album-list">
          <h1>Albums </h1>
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))}
        </div>
      );
};

export default AlbumList;