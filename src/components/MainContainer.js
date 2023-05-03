import React from 'react';
import MessageForm from './MessageForm';
import Feed from './Feed';
export default function MainContainer () {
    return (
        <div>
            <Feed />
            <MessageForm />
        </div>
    )
}
