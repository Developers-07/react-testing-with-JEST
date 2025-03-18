import React from 'react';

const GetTitle = () => {
    return (
        <div>
            <h1>getByTitle</h1>

            <button title="click me">Click</button>

            <br/>

            <span style={{fontSize: "xxx-large"}} title="black spade">&#x2660;</span>
        </div>
    );
};

export default GetTitle;