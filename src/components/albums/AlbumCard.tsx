import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Album {
  id: number;
  title: string;
  description: string;
  cover: string;
  photos: number;
  createdAt: string;
  author: string;
}

interface AlbumCardProps {
  album: Album;
  onClick?: (id: number) => void;
}

export default function AlbumCard({ album, onClick }: AlbumCardProps) {
  return (
    <div 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white rounded-lg border border-gray-200"
      onClick={() => onClick?.(album.id)}
    >
      <div className="p-0">
        <div className="relative">
          <img 
            src={album.cover} 
            alt={album.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
            {album.photos} 张照片
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{album.title}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{album.description}</p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>by {album.author}</span>
            <span>{album.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}