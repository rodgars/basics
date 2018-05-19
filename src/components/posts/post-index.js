import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../../actions/posts';

class PostIndex extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <Link className="collection-item" key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>
            );
        });
    }

    render(){
        return (
            <div>
                <h3>Posts</h3>
                <ul className="collection">
                    {this.renderPosts()}
                </ul>
                <Link className="waves-effect waves-light btn" to="/posts/new">
                <i className="material-icons left">add</i> Add Post
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);