import React from "react";
import EmailList from "./EmailList";

class SearchView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            results: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/search?query=${event.target.query.value}`)
            .then(response => response.json())
            .then(data => this.setState({ results: data }));
    }

    render() {
        return (
            <div id="search-view">
                <form id="search-form" onSubmit={ this.handleSubmit }>
                    <label>Query:</label>
                    <input id="query" type="text" />
                    <button type="submit">Search</button>
                </form>
                <div id="search-results">
                    <h2>Search results:</h2>
                    <EmailList emails={ this.state.results } />
                </div>
            </div>
        );
    }
}

export default SearchView;
