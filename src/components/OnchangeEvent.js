import React, {useState} from 'react';

const OnchangeEvent = () => {
    const [data, setData] = useState("");
    return (
        <div>
            <h1>on Change Event</h1>
            <input type="text" value={data} onChange={(val)=>{
                setData(val.target.value);
            }}/>
        </div>
    );
};

export default OnchangeEvent;