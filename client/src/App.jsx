import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {

  const [photos, setPhotos] = useState([])
  
  async function fetchCollection() {
    const res = await fetch("http://localhost:3000/api/unsplash/collection?id=qeQURMsKYh0");
    const data = await res.json();

    console.log("Full response data:", data)
    console.log("Number of photos received:", data.length)

    setPhotos(data)
  }

  useEffect(() => {
    fetchCollection();
  }, [])

  return (
    <div> 
    {photos.map ((photo, index) => (
      <div key={photo.id}>
        {photo.urls?.small && (
          <img key={photo.id || index} 
        src={photo.urls.small} 
        alt={photo.alt_description || "Holiday destination"}
        />
        )}
      </div>
    ))}
    </div> 
  )
}


