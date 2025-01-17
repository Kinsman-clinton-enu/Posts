import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash'

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
     dispatch({type: 'FETCH_POSTS', playload: response });
   };



export const fetchUser = id => dispatch => _fetchuser(id, dispatch)

const _fetchuser = _.memoize(async(id, dispatch) => {
    const response = await jsonPlaceholder.get(`users/${id}`);

    dispatch({type: 'FETCH_USER', playload: response.data});
});