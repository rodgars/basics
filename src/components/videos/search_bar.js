import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    render() {
        return (
            <div className="row">
                <br />
                <div className="input-field col s12">
                    <input
                        id="search"
                        type="text"
                        placeholder="Surfboard"
                        value={ this.state.term } 
                        onChange={ event => this.onInputChange(event.target.value) } />
                    <label htmlFor="search">Search videos:</label>
                </div>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;