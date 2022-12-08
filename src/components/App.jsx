//import Form  from "./Searchbar/Searchbar";
import { Component } from "react";
//import { ToastContainer} from 'react-toastify';
import { fetchImages } from "./servise/Fech";
import {Button} from './Button/Button'
import { Loader } from "./Loader/Loader";
import {ImageGallery} from "./ImageGallery/ImageGallery";
//import { gallaryMaper } from "../utils/maper"
import Modal from "./Modal/Modal"
import style from 'components/App.module.css'
import Form from "./Searchbar/Searchbar";


export class App extends Component{
  state = {
    images: [],
    pageNamber: 1,
    error: null,
    loading: false,
    search: false,
    showModal: false,
    largeImageId: null,
    largeImage: [],
    totalHits:0
  }

  //передали  сабмит из сабмита
  hendleSubmit = search => {
    this.setState({ search, images: [], pageNumber: 1  })
}
  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.search;
    const prevQuery = prevState.search;
    const prevNumber = prevState.pageNamber;
    const nextNumber = this.state.pageNamber;
   
    if ((nextQuery!== prevQuery) || (nextNumber !== prevNumber)) {
  
      this.getGallery();
      
    }

  }
  getGallery = () => {
       
    const { search, pageNamber } = this.state;  
    this.setState({ loading: true });
        fetchImages( search, pageNamber)
                .then(images => {
                   this.setState(prevState => ({
                      images:[...prevState.images, ...images],   
                   })) 
                    return images[0];
                })
            .catch(error => {
        this.setState({ error });      
            }) 
     .finally(() => this.setState({ loading: false }));
      } 
          
  onLoadMore = () => {
    this.setState(prevState => ({
      pageNamber: prevState.pageNamber + 1,
    }));
 
  }
  findImg = () => {
    const { largeImageId, images } = this.state;
        images.find(image => {
            return image.id === largeImageId;
       });
        
    };
   openModal =largeImageURL=> {
     this.setState({
     showModal: true,
   largeImageId:largeImageURL
      // largeImage:(e.currentTarget.largeImageURL)
     })

   }
  
 closeModal = () => {
    this.setState({showModal: false});
  };
  render() {
    const { images, loading, largeImageId,showModal,error,pageNamber} = this.state
    const {largeImageURL}=this.props
    return (
    
      <>
       
       <Form onSubmit={this.hendleSubmit} /> 
        
        {loading && <Loader />}
        {images.length > 0 &&(
        <>
            <ImageGallery images={images} openModal={this.openModal} />
            <Button text='Load more' clickHandler={this.onLoadMore} />
        </>
        )}   
        { showModal  && <Modal largeImageURL={largeImageURL} onClose={this.closeModal}>
          <img src={largeImageId} alt="text" />
        </Modal >}
    </>
  )}
};

