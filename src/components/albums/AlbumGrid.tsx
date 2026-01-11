import React from 'react';
import AlbumCard from './AlbumCard';

export interface Album {
  id: number;
  title: string;
  description: string;
  cover: string;
  photos: number;
  createdAt: string;
  author: string;
}

interface AlbumGridProps {
  albums: Album[];
  onAlbumClick?: (id: number) => void;
}

export default function AlbumGrid({ albums, onAlbumClick }: AlbumGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          onClick={onAlbumClick}
        />
      ))}
    </div>
  );
}