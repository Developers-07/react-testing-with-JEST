import React, {useState} from 'react';

const UserEvent = () => {
    const [data, setData]= useState("");
    const [name, setName] = useState("");

    return (
        <div>
            <h1>userEvent Library and act function</h1>

            <button onClick={()=>setData("Hello Zishan")}>Click me</button>
            <h2 data-testid="userData">{data}</h2>

            <input type="text" onChange={(val)=>setName(val.target.value)} placeholder="Enter name"/>
            <h2>{name}</h2>



        </div>
    );
};

export default UserEvent;