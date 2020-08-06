import React from 'react';
import { Link } from '@reach/router';

const WordColorColor = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.textColor
    }
    return(
        <>
        <h3 style={styles}>The styled word is: {props.word}</h3>
        <Link to="/home">Back to Home</Link>
        </>
    );
}

export default WordColorColor;