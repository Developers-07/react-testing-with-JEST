import React, {useState} from 'react';

const OnclickEvent = () => {
        const [data, setData] = useState("");
        return (
        <div>
            <h1>On Click Event Testing</h1>
            <button onClick={()=>{setData("Successfully Updated")}}>Update Data</button>
            <h2>{data}</h2>
        </div>
    );
};

export default OnclickEvent;