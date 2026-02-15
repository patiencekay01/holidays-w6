export default function ThumbnailBar ({photos, currentIndex, onImageClick}) {

return (
    <div className="thumbnails"> 
    {photos.map ((photo, index) => (
      <img key={photo.id}
        src={photo.urls.small} 
        alt={photo.alt_description || "Holiday destination"}
        onClick={() => onImageClick(index)}
        className={index === currentIndex ? "active" : ""}
        />
        ))}
      </div>
);
}