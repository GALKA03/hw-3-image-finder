import { Component, createRef  } from "react";
//import { createPortal } from "react-dom";
import style from 'components/Modal/Modal.module.css'

//const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component{
  // state = {
  //     images:[],
  //   showModal: false,
  //    largeImageId: null,
  //   largeImage: []
     
  //   }
  
    componentDidMount() {
        window.addEventListener('keydown',this.modalKeyDown)  
        }   
    componentWillUnmount() {
        console.log('modal componentWillUnmount')
        window.removeEventListener('keydown',this.modalKeyDown)
    }
     modalKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    } 
       
  }

   handleClickBackdrop = e => {
      if (e.currentTarget === e.target) {
      this.props.onClose();
    }
     
    }


  render() {
    const { children} = this.props;
    
      return( 
        
          < div className={style.Overlay}
            // onClick={closeModal}
          //ref={this.modalKeyDown()}
            onClick={this.handleClickBackdrop}
          >
            <div 
              className={style.Modal} >
            { children}
    
            </div>
          </div >
      )
               }
  
}
