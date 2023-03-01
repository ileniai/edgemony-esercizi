import "./index.css";

const GalleryCard = ({ galleryItem }) => {
 
  return (
    <div className="GalleryCard">
      <img className="image_gallery" src={galleryItem.url} alt={galleryItem.name} />
        <p className="name">{galleryItem.name}</p>      
    </div>
  );
};

export default GalleryCard;