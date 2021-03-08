import React from 'react';
import '../styles/Message.css';


function Message({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <img src={userImage} alt="" />
            <div className="message-info">
                <h4>
                    {user} timestamp...
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}


export default Message
