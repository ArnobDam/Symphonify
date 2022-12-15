import React from "react";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ albums, highlightedAlbum, setHighlightedAlbum }) {

  console.log(albums)

    return (
        <div className="album-list-w-header">
          <h1>Albums</h1>
          <div className="album-list">
            <>
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))}
          {/* {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))}
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))}
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))}
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
            //   isHighlighted={highlightedAlbum === album.id}
            //   setHighlightedAlbum={setHighlightedAlbum}
            />
          ))} */}
          </>
          </div>
        </div>
        
      );
};

export default AlbumList;