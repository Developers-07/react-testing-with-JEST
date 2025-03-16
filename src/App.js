import React from 'react';
import FirstTest from "./components/FirstTest";
import OnchangeEvent from "./components/OnchangeEvent";
import OnclickEvent from "./components/OnclickEvent";

const App = () => {
    return (
        <div>
          <FirstTest/>
            <OnchangeEvent/>
            <p> Learn React testing with jest</p>
            <OnclickEvent/>

        </div>
    );
};

export default App;