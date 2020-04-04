import _ from 'lodash';

import jsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPostsandUsers = () => async (dispatch, getState) =>{
    await dispatch(fetchPost());

    _.chain(getState().postList)
    .map('userId')
    .uniq()
    .forEach(userId=>dispatch( fetchUser(userId)) )
    .value();
}

export const fetchPost = ()=> async dispatch=>{
        const response = await jsonPlaceHolder.get('/posts')
        const result = {
            type : 'FETCH_POST',
            payload : response.data
        }
        dispatch(result) 
};

export const fetchUser = (userId)=> async dispatch =>{
    const response = await jsonPlaceHolder.get(`/users/${userId}`)
    const result = {
        type : 'FETCH_USER',
        payload : response.data
    }

    dispatch(result)
}