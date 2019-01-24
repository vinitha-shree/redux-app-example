import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:'',
            post: []
        };
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.state.post.push({
            title:this.state.title,
            body: this.state.body
        })
        
       this.props.createPost(this.state.post);
       this.setState({
           title:"",
           body:""
       });
        }
    render(){

        return(
            <div>
                <h2>Add post</h2>
                <form onSubmit= {this.onSubmit}>
                    <div>
                    <label>title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br />
                    <div>
                    <label>Content</label><br />
                    <input type="text" name="body" value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost:PropTypes.func.isRequired
};

export default connect(null,{createPost}) (PostForm);