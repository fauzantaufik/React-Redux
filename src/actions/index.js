import jsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPost = ()=> async dispatch=>{
        const response = await jsonPlaceHolder.get('/posts')
        const result = {
            type : 'FETCH_POST',
            payload : response.data
        }
        dispatch(result) 
};