import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../../actions/posts';
import {Link} from 'react-router-dom';

class PostsShow extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/posts');
        });
    }

    render(){
        const {post} = this.props;

        if(!post){
            return <div>Loading...</div>;
        }

        return(
            <div>
                <Link to="/posts">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <a onClick={this.onDeleteClick.bind(this)} className="waves-effect waves-light btn-small red"><i className="material-icons left">remove_circle</i>Delete Post</a>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps){
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost, deletePost})(PostsShow);