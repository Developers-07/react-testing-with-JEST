import React from 'react';

const GetLabel = () => {
    return (
        <div>
            <h1>getByLabelText</h1>
            <label htmlFor="input1">Username</label>
            <input type="text" id="input1" defaultValue="Zishan"/>

            <br/>
            <br/>

            <label htmlFor="input2">Skills</label>
            <input type="checkbox" id="input2" defaultChecked={true} />
        </div>
    );
};

export default GetLabel;