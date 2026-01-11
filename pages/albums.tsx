import React from 'react';
import Header from '../src/components/Header';
import PageHeader from '../src/components/PageHeader';
import AlbumGrid from '../src/components/albums/AlbumGrid';
import Button from '../src/components/ui/button';
import { albumsData } from '../src/lib/albumsData';

const AlbumsPage: React.FC = () => {

  const handleAlbumClick = (id: number) => {
    console.log('View album:', id);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--renren-bg)' }}>
      <Header currentPage="albums" />
      
      <div className="max-w-6xl mx-auto p-4">
        <PageHeader
          title="我的相册"
          actions={
            <div className="flex items-center space-x-3">
              <Button>
                上传照片
              </Button>
              <Button variant="outline">
                创建相册
              </Button>
            </div>
          }
        />
        
        <AlbumGrid 
          albums={albumsData}
          onAlbumClick={handleAlbumClick}
        />
      </div>
    </div>
  );
};

export default AlbumsPage;