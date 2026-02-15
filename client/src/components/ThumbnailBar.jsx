export default function ThumbnailBar ({photos, currentIndex, onImageClick}) {

return (
    <div className="thumbnails"> 
    {photos.map ((photo, index) => (
      <img key={photo.id}
        src={photo.urls.small} 
        alt={photo.alt_description || "Holiday destination"}
        onClick={() => onImageClick(index)}
        className={index === currentIndex ? "active" : ""}
        tabIndex={0}
        onKeyDown={(e) => {
            onImageClick(index)
        }
    }
        />
        ))}
      </div>
);
}