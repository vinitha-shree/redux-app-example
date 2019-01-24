import {FETCH_POST , NEW_POST} from '../actions/types';

// export const fetchPosts = () => dispatch =>{
//         console.log("fetching...")
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts  => dispatch({
//             type: FETCH_POST,
//             payload:posts
//         })
//     );
    
// };

export const createPost = (postData) => dispatch =>{
                dispatch({
                    type: NEW_POST,
                    payload:postData
                })


};