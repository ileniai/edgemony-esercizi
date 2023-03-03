import "./index.css";

const ImageModal = ()=>{
    return<div className="ImageModal">
        <div className="ImageModal_overlay"></div>
        <img src={"https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800"} alt="{photos.id}"/>
    </div>
}

export default ImageModal;

//<img src={quote.image} alt={quote.name}/>