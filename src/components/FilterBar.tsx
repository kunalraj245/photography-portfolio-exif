import React from 'react';
import { Filter } from 'lucide-react';
import { PhotoCategory } from '../types/Photo';

interface FilterBarProps {
  selectedCategory: PhotoCategory;
  onCategoryChange: (category: PhotoCategory) => void;
  photoCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  selectedCategory, 
  onCategoryChange, 
  photoCount 
}) => {
  const categories: { value: PhotoCategory; label: string }[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'landscape', label: 'Landscape' },
    { value: 'portrait', label: 'Portrait' },
    { value: 'nature', label: 'Nature' },
    { value: 'street', label: 'Street' },
    { value: 'macro', label: 'Macro' },
    { value: 'wildlife', label: 'Wildlife' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-1">
            <Filter size={20} className="text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">Filter by category:</span>
          </div>
          
          <div className="text-sm text-gray-500">
            {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pb-4">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
