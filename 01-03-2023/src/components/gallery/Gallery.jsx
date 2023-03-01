import GalleryCard from "../galleryCard"
import "./index.css"

const Gallery = ()=> {
    //const onSuccClick = () => ;
    const imageGallery = [ {
        name: "image1",
        url: "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=600" 
        },
        {
        name: "image2",
        url: "https://images.pexels.com/photos/159778/books-reading-series-narnia-159778.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
        name:"image3",
        url:"https://images.pexels.com/photos/7080688/pexels-photo-7080688.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
        name:"image4",
        url:"https://images.pexels.com/photos/7260640/pexels-photo-7260640.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
        name:"image5",
        url:"https://images.pexels.com/photos/4865517/pexels-photo-4865517.jpeg?auto=compress&cs=tinysrgb&w=600",
        }
        ]

        return(
            <div className="Gallery">
                <h2 className="title_gallery">GALLERY</h2>
              {
                 imageGallery.map(item => <GalleryCard galleryItem={item} />
                 )
                
             }
            <button>+</button>
            <button>-</button>
            </div>
        )
}

export default Gallery;