import { Component } from "react";
import style from "components/Searchbar/Searchbar.module.css"
import {toast } from 'react-toastify';
//import {fetchEvent} from "./Fech"

 export default class Form extends Component{
     state = {
         serch: '',
     };
     hendelChengeForm = e => {
             this.setState({
                 serch: e.currentTarget.value.toLowerCase(),
             })
         
         }
     hendleFormSubmit = e => {
         const {serch} = this.state
         //const { onSubmit } = this.props;
             e.preventDefault();
         if (!serch.trim() ) {
               alert('Please, enter necessary information!')
                 return  
         }
         
         this.props.onSubmit(serch);
         
         
             this.setState({ serch: '' });
         }
         
     render() {
         const { serch} = this.state;
        return( 
        <header className={style.Searchbar}>
                <form className={style.SearchForm}
                    onSubmit={this.hendleFormSubmit}
                >
                <button type="submit"
                    className={style.SearchForm_button}>
      <span className={style.SearchForm_buttonLabel}>Search</span>
    </button>

                    <input
                        onChange={this.hendelChengeForm}
                        value ={serch}
      className={style.SearchFormInput}
                        type="text"
                        name="serch"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )}
}
