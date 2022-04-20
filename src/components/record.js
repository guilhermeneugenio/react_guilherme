import React from 'react';
import { Link  } from 'react-router-dom';

const Record = props => {
    return (
        <Link to={"/questions/"+props.id} style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <div className='row'>
                <p>{props.id}</p> <p></p>
                <img src={props.thumb_url} alt="question" />
                <div className='card'>
                    <p>Question: {props.question}</p>
                </div>
            </div>
        </Link>

    );
};


export default Record;