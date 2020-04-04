import { combineReducers } from 'redux';

const postListReducer = (data=[], action)=>{
    switch (action.type){
        case 'FETCH_POST':
            return action.payload
        default:
            return data
    }
}

const UserHeaderReducer = (data=[], action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return [...data, action.payload]
        default:
            return data
    }
}

export default combineReducers({
    postList : postListReducer,
    users : UserHeaderReducer
})