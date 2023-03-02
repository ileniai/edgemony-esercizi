import "./index.css";

const ImageModal = ({quote})=>{
    return<div className="ImageModal">
        <div className="ImageModal_overlay"></div>
        <img src={quote.image[0]} alt={quote.name}/>
    </div>
}

export default ImageModal;