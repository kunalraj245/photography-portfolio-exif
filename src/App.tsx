import React, { useState } from 'react';
import { samplePhotos } from './data/samplePhotos';
import { PhotoCategory, Photo } from './types/Photo';
import { PhotoCard } from './components/PhotoCard';
import { PhotoModal } from './components/PhotoModal';
import { FilterBar } from './components/FilterBar';
import './styles.css';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category: PhotoCategory) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const filteredPhotos = samplePhotos.filter(photo =>
    selectedCategory === 'all' || photo.category === selectedCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <FilterBar 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
        photoCount={filteredPhotos.length} 
      />

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} onClick={() => handlePhotoClick(photo)} />
        ))}
      </div>

      <PhotoModal 
        photo={selectedPhoto} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;

