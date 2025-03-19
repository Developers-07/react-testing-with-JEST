import React, {useEffect, useState} from 'react';

const FindBy = () => {
    let [data, setData] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setData(true);
        }, 600)
    },[])
    return (
        <div>
            <h1>FindBy</h1>

            {
                data ? "data found" : "data not found"
            }

        </div>
    );
};

export default FindBy;