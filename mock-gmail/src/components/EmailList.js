import React from "react";

class EmailList extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <ul>
                {
                    this.props.emails.map(email => {
                        return (
                            <li key={`${email.id}`}>
                                <a href={`/emails/${email.id}`}>
                                     {email.subject}
                                </a>
                                <br />
                                {email.sender}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default EmailList;
