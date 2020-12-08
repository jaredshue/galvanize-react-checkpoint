import React from "react";

class EmailView extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: {}
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/emails/${this.props.emailId}`)
            .then(response => response.json())
            .then(data => this.setState({ email: data }));
    }

    render() {
        return (
            <div id="email-view">
                <h1>{ this.state.email.subject }</h1>
                <h3>from: { this.state.email.sender }</h3>
                <h3>to: { this.state.email.recipient }</h3>
                <h4>date: { this.state.email.date }</h4>
                <p>{ this.state.email.message }</p>
            </div>
        );
    }
}

export default EmailView;
