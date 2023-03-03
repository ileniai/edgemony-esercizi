import { useState } from "react";
import "./index.css";

const Slider = () => {
  const images = [
    "https://media.istockphoto.com/id/1200997586/it/foto/penna-stilografica-su-carta-con-primo-piano-testo-inchiostro.jpg?b=1&s=612x612&w=0&k=20&c=HNcPdrB7Q_msbVxdYSEJ0dn7POHamClR2O4hSYZ5MxE=",
    "https://images.pexels.com/photos/1428626/pexels-photo-1428626.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1925942/pexels-photo-1925942.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/9572703/pexels-photo-9572703.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6157226/pexels-photo-6157226.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const [actualImg, setActualImg] = useState(0);

  return (
    <div className="Slider">
        
      <img src={images[actualImg]} alt="img" />
      <h1 className="title_slider">Gallery Slider</h1>   
      <button className="button1" onClick={() => setActualImg(actualImg - 1)}>{"<"}</button>
      <button className="button2"onClick={() => setActualImg(actualImg + 1)}>{">"}</button>  
    </div>
  );
};

export default Slider;