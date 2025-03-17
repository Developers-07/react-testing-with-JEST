import React from 'react';
import FirstTest from "./components/FirstTest";
import OnchangeEvent from "./components/OnchangeEvent";
import OnclickEvent from "./components/OnclickEvent";
import MethodTesting from "./components/MethodTesting";
import CustomRole from './components/CustomRole'

const App = () => {
    return (
        <div>
          <FirstTest/>
            <OnchangeEvent/>
            <p> Learn React testing with jest</p>
            <OnclickEvent/>

            <MethodTesting/>

            <CustomRole/>

        </div>
    );
};

export default App;