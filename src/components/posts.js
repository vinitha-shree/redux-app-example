import React, {Component} from 'react';
import {connect} from 'react-redux';

class Posts extends Component{
    createItems(){
        return this.props.item.map((post , i) =>{
            return (
                <div key ={i}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </div>
            );
        });
    }
    render(){
        return(
            <div>
                <h1>Posts</h1>
                {this.createItems()}
            </div>
        )
    }

}



const mapStateToProps = state => ({
    // posts: state.posts.items,
    item: [...state.posts.item] 
});

export default connect(mapStateToProps,{ })(Posts);