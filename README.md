# Photography Portfolio with EXIF Data

A modern, responsive photography portfolio built with React and TypeScript that showcases photos with detailed EXIF metadata display.

## ✨ Features

### 🎨 Clean, Modern Design
- Minimalist aesthetic with card-based layout
- Smooth animations and transitions
- Responsive design that works on all devices

### 📸 EXIF Data Display
- Complete camera settings information
- Focal length, aperture, shutter speed, ISO
- Exposure compensation details
- Camera and lens information
- Date, time, and location data

### 🔍 Category Filtering
- Filter photos by type (landscape, portrait, nature, etc.)
- Dynamic photo count display
- Smooth category transitions

### 🖼️ Detailed Modal View
- Click any photo to see full details
- Larger image view
- Complete technical metadata
- Tag system for photo organization

### 📱 Responsive Layout
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interactions

## 🛠️ Technical Implementation

- **React 19** with TypeScript
- **Tailwind CSS** for styling and animations
- **Lucide React** icons for professional UI
- Modern React Hooks for state management
- Sample data with realistic EXIF information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd photo-gallery
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎯 Customization Options

### Replace Sample Data
Update the `src/data/samplePhotos.ts` file with your actual photo data:

```typescript
export const samplePhotos: Photo[] = [
  {
    id: 'your-photo-id',
    title: 'Your Photo Title',
    description: 'Photo description',
    imageUrl: 'path/to/full-image.jpg',
    thumbnailUrl: 'path/to/thumbnail.jpg',
    category: 'landscape',
    tags: ['tag1', 'tag2'],
    exifData: {
      camera: 'Your Camera',
      lens: 'Your Lens',
      // ... other EXIF data
    }
  }
];
```

### Add File Upload
Integrate with a file upload service or API to dynamically add photos.

### EXIF Reading
Use libraries like `exif-js` to automatically extract EXIF data from uploaded photos:

```bash
npm install exif-js
npm install @types/exif-js
```

### Backend Integration
Connect to a database or photo service API for dynamic content management.

### Additional Features
- Add favorites functionality
- Implement sharing options
- Add download capabilities
- Include search functionality
- Add user authentication

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── PhotoCard.tsx   # Individual photo card
│   ├── PhotoModal.tsx  # Detailed photo view
│   └── FilterBar.tsx   # Category filtering
├── data/               # Sample data
│   └── samplePhotos.ts # Photo data with EXIF
├── types/              # TypeScript definitions
│   └── Photo.ts        # Photo and EXIF interfaces
├── App.tsx             # Main application component
├── index.tsx           # React DOM entry point
└── styles.css          # Global styles and Tailwind imports
```

## 🎨 Styling

The project uses Tailwind CSS for styling with custom animations:
- Fade-in animations for photo cards
- Scale-in animations for modal
- Hover effects and transitions
- Responsive grid layouts

## 📄 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🌟 Demo Features

The gallery includes 6 sample photos showcasing different photography categories:
- Landscape photography with mountain sunrise
- Portrait photography with natural lighting
- Nature photography with forest canopy
- Street photography with urban nightlife
- Macro photography with dewdrop details
- Wildlife photography with eagle in flight

Each photo includes realistic EXIF data from professional cameras like Canon EOS R5, Sony A7 IV, Nikon Z9, and more.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Sample images provided by [Unsplash](https://unsplash.com)
- Icons by [Lucide React](https://lucide.dev)
- Built with [Create React App](https://create-react-app.dev)
