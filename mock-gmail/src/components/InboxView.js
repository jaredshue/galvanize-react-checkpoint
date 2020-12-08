import React from "react";
import EmailList from "./EmailList";

class InboxView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            emails: []
        };
    }

    sortEmailsByDate = (event) => {
        var emails = [...this.state.emails];
        emails.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        this.setState({ emails: emails });
    }

    componentDidMount() {
        fetch("http://localhost:3001/emails")
            .then(response => response.json())
            .then(data => this.setState({ emails: data }));
    }

    render() {
        return (
            <div id="inbox-view">
                <button id="inbox-view-btn-sort-by-date" onClick={ this.sortEmailsByDate }>Sort by date</button>
                <EmailList emails={ this.state.emails } />
            </div>
        );
    }
}

export default InboxView;
