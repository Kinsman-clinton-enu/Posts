/* eslint-disable react/prop-types */
import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        console.log(this.props.posts   )
        return <div>Post List</div>
    }
}

const getMyState = state => {
    return {posts: state.posts}
}

export default connect(getMyState, {fetchPosts})(PostList);