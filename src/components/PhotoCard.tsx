import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import { Photo } from '../types/Photo';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full capitalize">
            {photo.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {photo.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {photo.description}
        </p>
        
        {/* Quick EXIF Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Camera size={12} />
            <span>{photo.exifData.camera}</span>
          </div>
          
          {photo.exifData.location && (
            <div className="flex items-center space-x-1">
              <MapPin size={12} />
              <span className="truncate max-w-20">{photo.exifData.location}</span>
            </div>
          )}
        </div>
        
        {/* Technical Details */}
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
            <div>
              <span className="font-medium">{photo.exifData.aperture}</span>
            </div>
            <div>
              <span className="font-medium">{photo.exifData.shutterSpeed}</span>
            </div>
            <div>
              <span className="font-medium">ISO {photo.exifData.iso}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
