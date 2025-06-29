import { Photo } from '../types/Photo';

export const samplePhotos: Photo[] = [
  {
    id: '1',
    title: 'Mountain Sunrise',
    description: 'A breathtaking sunrise over the mountain peaks with golden hour lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    category: 'landscape',
    tags: ['sunrise', 'mountains', 'golden hour'],
    exifData: {
      camera: 'Canon EOS R5',
      lens: 'Canon RF 24-70mm f/2.8L IS USM',
      focalLength: '35mm',
      aperture: 'f/8.0',
      shutterSpeed: '1/125s',
      iso: 100,
      exposureCompensation: '0 EV',
      date: '2024-01-15',
      time: '06:30:00',
      location: 'Swiss Alps'
    }
  },
  {
    id: '2',
    title: 'Portrait in Natural Light',
    description: 'A captivating portrait using natural window light for soft illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616c6e98c8c?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494790108755-2616c6e98c8c?w=400&h=300&fit=crop',
    category: 'portrait',
    tags: ['portrait', 'natural light', 'studio'],
    exifData: {
      camera: 'Sony A7 IV',
      lens: 'Sony FE 85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/200s',
      iso: 400,
      exposureCompensation: '+0.3 EV',
      date: '2024-02-08',
      time: '14:20:00'
    }
  },
  {
    id: '3',
    title: 'Forest Canopy',
    description: 'Looking up through the dense forest canopy with dappled sunlight.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    category: 'nature',
    tags: ['forest', 'trees', 'canopy', 'green'],
    exifData: {
      camera: 'Nikon Z9',
      lens: 'Nikkor Z 14-24mm f/2.8 S',
      focalLength: '14mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/60s',
      iso: 800,
      exposureCompensation: '-0.7 EV',
      date: '2024-03-12',
      time: '11:45:00',
      location: 'Pacific Northwest'
    }
  },
  {
    id: '4',
    title: 'City Street at Night',
    description: 'Urban street photography capturing the energy of city life after dark.',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    category: 'street',
    tags: ['street', 'night', 'urban', 'lights'],
    exifData: {
      camera: 'Fujifilm X-T5',
      lens: 'Fujinon XF 23mm f/1.4 R LM WR',
      focalLength: '23mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/30s',
      iso: 1600,
      exposureCompensation: '0 EV',
      date: '2024-04-05',
      time: '21:15:00',
      location: 'Tokyo, Japan'
    }
  },
  {
    id: '5',
    title: 'Dewdrop Macro',
    description: 'Extreme close-up of a dewdrop on a flower petal in the early morning.',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    category: 'macro',
    tags: ['macro', 'dewdrop', 'flower', 'close-up'],
    exifData: {
      camera: 'Canon EOS R7',
      lens: 'Canon RF 100mm f/2.8L Macro IS USM',
      focalLength: '100mm',
      aperture: 'f/11.0',
      shutterSpeed: '1/250s',
      iso: 200,
      exposureCompensation: '+0.7 EV',
      date: '2024-05-20',
      time: '07:00:00'
    }
  },
  {
    id: '6',
    title: 'Eagle in Flight',
    description: 'Majestic bald eagle captured mid-flight against a clear blue sky.',
    imageUrl: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200&h=800&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=400&h=300&fit=crop',
    category: 'wildlife',
    tags: ['wildlife', 'eagle', 'flight', 'bird'],
    exifData: {
      camera: 'Sony A7R V',
      lens: 'Sony FE 200-600mm f/5.6-6.3 G OSS',
      focalLength: '600mm',
      aperture: 'f/6.3',
      shutterSpeed: '1/1000s',
      iso: 1000,
      exposureCompensation: '0 EV',
      date: '2024-06-10',
      time: '15:30:00',
      location: 'Alaska'
    }
  }
];
