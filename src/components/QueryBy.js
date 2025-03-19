import React from 'react';

const QueryBy = () => {
    let login = false;
    return (
        <div>
            <h1>QueryBy</h1>

            {
                login ?  <button>Log out</button> :  <button>Log in</button>
            }
        </div>
    );
};

export default QueryBy;