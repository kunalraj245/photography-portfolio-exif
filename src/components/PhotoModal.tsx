import React from 'react';
import { X, Camera, Calendar, Clock, MapPin, Aperture, Timer, Zap } from 'lucide-react';
import { Photo } from '../types/Photo';

interface PhotoModalProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, isOpen, onClose }) => {
  if (!isOpen || !photo) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-2/3 relative">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-64 lg:h-auto lg:max-h-[90vh] object-contain bg-gray-100"
            />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Details Section */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Title and Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {photo.title}
                </h2>
                <p className="text-gray-600">
                  {photo.description}
                </p>
              </div>
              
              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Camera Information */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Camera size={16} className="mr-2" />
                  Camera Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Camera:</span>
                    <span className="font-medium">{photo.exifData.camera}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lens:</span>
                    <span className="font-medium">{photo.exifData.lens}</span>
                  </div>
                </div>
              </div>
              
              {/* Technical Settings */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Aperture size={16} className="mr-2" />
                  Camera Settings
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">Focal Length</div>
                    <div className="font-semibold">{photo.exifData.focalLength}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">Aperture</div>
                    <div className="font-semibold">{photo.exifData.aperture}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">Shutter Speed</div>
                    <div className="font-semibold">{photo.exifData.shutterSpeed}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-600 text-xs mb-1">ISO</div>
                    <div className="font-semibold">{photo.exifData.iso}</div>
                  </div>
                </div>
                
                <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Exposure Compensation:</span>
                    <span className="font-medium">{photo.exifData.exposureCompensation}</span>
                  </div>
                </div>
              </div>
              
              {/* Date and Time */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Date & Time
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      Date:
                    </span>
                    <span className="font-medium">{photo.exifData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Clock size={12} className="mr-1" />
                      Time:
                    </span>
                    <span className="font-medium">{photo.exifData.time}</span>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              {photo.exifData.location && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Location
                  </h3>
                  <div className="text-sm">
                    <span className="font-medium">{photo.exifData.location}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
