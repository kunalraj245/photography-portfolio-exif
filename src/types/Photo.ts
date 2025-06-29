export interface ExifData {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: number;
  exposureCompensation: string;
  date: string;
  time: string;
  location?: string;
}

export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  exifData: ExifData;
}

export type PhotoCategory = 'all' | 'landscape' | 'portrait' | 'nature' | 'street' | 'macro' | 'wildlife';
