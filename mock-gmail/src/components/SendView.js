import React from "react";

class SendView extends React.Component {
    constructor(props) {
        super();
    }

    handleSubmit = (event) => {
        var email = {
            id: null,
            sender: event.target.sender.value,
            recipient: event.target.recipient.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
            date: null
        };


        fetch("http://localhost:3001/send", {
            method: "POST",
            body: JSON.stringify(email),
            headers: { "Content-Type": "application/json" }
        });
    }

    render() {
        return (
            <div id="send-view">
                <form id="email-form" onSubmit={ this.handleSubmit }>
                    <label>Sender: </label>
                    <input id="sender" type="text" value="jane@galvanize.com" disabled />
                    <label>Recipient: </label>
                    <input id="recipient" type="text" value="brandon@galvanize.com" />
                    <label>Subject: </label>
                    <input id="subject" type="text" />
                    <label>Message: </label>
                    <input id="message" type="text" />
                    <button type="submit">Send Email</button>
                </form>
            </div>
        );
    }
}

export default SendView;
