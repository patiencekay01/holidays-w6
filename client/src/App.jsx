import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import ThumbnailBar from './components/ThumbnailBar'

export default function App() {

  const [photos, setPhotos] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  async function fetchCollection() {
    const res = await fetch("https://holidays-w6-server.onrender.com/api/unsplash/collection?id=qeQURMsKYh0");
    const data = await res.json();

    setPhotos(data)
  }

  useEffect(() => {
    fetchCollection();
  }, [])

  function handleClick(index) {
    setCurrentIndex(index)
  }

  return (
    <div className="photos"> 
      {photos.length > 0 && (
      <BackgroundImage photo={photos[currentIndex]} />
      )}

    <ThumbnailBar 
      photos={photos}
      currentIndex={currentIndex}
      onImageClick={handleClick}
    /> 
    </div>
    );
  }
 




