//import { Component } from "react";
import style from "components/ImageGalleryItem/ImageGalleryItem.module.css";

export const GalleryItem = ({image, openModal}) => {
    //console.log('image',{image})
    const { webformatURL, tags, largeImageURL } = image;
    return ( 
               <li id = {image.id} 
            className={style.ImageGalleryItem}
onClick= {()=> openModal(largeImageURL)}
        >
                    
            <img   className={style.ImageGalleryItemImage}
                         src={webformatURL}
                alt={tags}  />
                    
                
            </li>


        )}
   
