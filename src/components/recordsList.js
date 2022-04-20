import React from 'react';
import Record from './record'

const RecordList = props => {
    return (
        // Maps user list receive as prop as UserItem to be displayed
        props.list.map((input, index) => {
        return (
            <Record
                key={index}
                id={input.id}
                question={input.question}
                image_url={input.image_url}
                thumb_url={input.thumb_url}
            />
        );
        })
        

    );
};


export default RecordList;