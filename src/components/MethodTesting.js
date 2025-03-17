import React, {useState} from 'react';
import handleOther from "../helper";

const MethodTesting = () => {
    const [data, setData] = useState("")
    const onHandle=()=>{
        setData("Hi!!")
    }
    //
    // const handleOther = () =>{
    //     console.log("hello!");
    //     return "hello!";
    // }
    return (
        <div>
            <button data-testid="btn1" onClick={onHandle}> Click here </button>

            <h2>{data}</h2>
        </div>
    );
};

export default MethodTesting;