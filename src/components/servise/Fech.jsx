//import axios from 'axios';


export const fetchImages = (nextQuery,nextNumber)=>{
return fetch(`https://pixabay.com/api/?q=${nextQuery}&page=${nextNumber}&key=30706711-d5d2ff18b6ad5954982c3eaa0&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        if (response.ok) {
                return response.json()
        }
        return Promise.reject(
            new Error(`no this name ${nextQuery}`)
        )
        } )
         //const arr = total.hits
                .then(images => images.hits)
                .then('fetch anser',console.log)
            .catch(error => {
                this.setState({ error })
            })
          //  .finally(() => this.setState({ Loading: false }))
        }
    

export { fetchImages as default }








//  function fetchGallery(query, page) {
//     const URL = 'https://pixabay.com/api/';
//     const KEY = '30706711-d5d2ff18b6ad5954982c3eaa0';
//     //const FILTER = `&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
//     ;
//     fetch(`${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(res => res.json())
//     .then(console.log)
//    // return  axios.get(`${URL}?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         //.then(response => response.data)
       
    
//}

//   return axios
//     .get(`https://pixabay.com/api/?q=cat&page=1&key=30706711-d5d2ff18b6ad5954982c3eaa0&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(response => response.data)
//     .then(console.log)
// }

    // return fetch(
    //     `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    // ).then(response => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     return Promise.reject(new Error('Invalid request'));
    
    // }).then(console.log);


//${URL}?key=${KEY}${FILTER}

// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const KEY = '30706711-d5d2ff18b6ad5954982c3eaa0';



// export const fetchMovies = (page,query) => {
//   return axios('hits/totalHits/total', {
//     params: {
//       api_key: KEY,
//           page,
//       query
//     },
//   });
//};