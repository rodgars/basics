import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../../actions/posts';

class PostsNew extends Component{
    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `input-field ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="validate" type="text" {...field.input} />
                <div className="red-text">{touched ? error : ''}</div>
                <br/><br/>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/posts');
        });
    }
    
    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Post Content" component={this.renderField} />
                <button type="submit" className="waves-effect waves-light btn-small blue">Save</button>
                <Link to="/posts" className="waves-effect waves-light btn-small red">Cancel</ Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title!";
    }

    if(!values.categories){
        errors.categories = "Enter some categories!";
    }

    if(!values.content){
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({validate,form: 'PostsNewForm'})(connect(null,{createPost})(PostsNew));