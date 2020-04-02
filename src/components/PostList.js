import React from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostList extends React.Component {
    
    componentDidMount(){
        this.props.fetchPost()
    }

    render(){
        console.log(this.props)
        return <div>PostList</div>
    }
}

const mapStateToProps = (state)=>{
    return { postList : state.postList }
}

export default connect(mapStateToProps, {fetchPost})(PostList);