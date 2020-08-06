import React from 'react';
import { Link } from '@reach/router';

const NumOrWord = (props) => {

    const wordOrNum = () => {
        if (isNaN(props.id)) {
            return (
                <h3>The word is: {props.id}</h3>
            )
        } else {
            return (
                <h3>The number is: {props.id}</h3>
            )
        }
    }

    return (
        <>
            {wordOrNum()}
            <Link to="/home">Back to Home</Link>
        </>
    );
}

export default NumOrWord;