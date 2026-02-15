import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {

  const [photos, setPhotos] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  async function fetchCollection() {
    const res = await fetch("http://localhost:3000/api/unsplash/collection?id=qeQURMsKYh0");
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
      <div className='background-image'
      style={{
        backgroundImage:`url(${photos[currentIndex].urls.regular})`,
        backgroundSize: "cover"
      }}
     /> 
    )}

    <div className="thumbnails"> 
    {photos.map ((photo, index) => (
      <img key={photo.id}
        src={photo.urls.small} 
        alt={photo.alt_description || "Holiday destination"}
        onClick={() => handleClick(index)}
        className={index === currentIndex ? "active" : ""}
        />
        ))}
      </div>
      </div>
    );
  }
 




