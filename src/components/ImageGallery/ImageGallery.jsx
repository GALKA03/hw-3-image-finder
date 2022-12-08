//import { Component } from "react";
import style from "components/ImageGallery/ImageGallery.module.css"
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ images, openModal }) => {
    return (
< ul className={style.ImageGallery} >
       {images.map(image => (
             <GalleryItem
                key={image.id}
               image={image}
               openModal={openModal}
              // largeImageURL={largeImageURL}
           />
        )
        )}
        </ul>



//  <ul className={style.ImageGallery}>
//     {images.map(({ webformatURL, tags, largeImageURL, id }) => (
//         <GalleryItem
//           src={webformatURL}
//           alt={tags}
//           largeImageURL={largeImageURL}
//           key={id}
//         />
//       ))}
//   </ul>









    //     
    
)}

