import { combineReducers } from 'redux';

const postListReducers = (data=[], action)=>{
    if (action.type === 'FETCH_POST'){
        return action.payload
    }

    return data
}

export default combineReducers({
    postList : postListReducers
})