import React from 'react';
import FirstTest from "./components/FirstTest";
import OnchangeEvent from "./components/OnchangeEvent";
import OnclickEvent from "./components/OnclickEvent";
import MethodTesting from "./components/MethodTesting";
import GetLabel from './components/GetLabel';
import TestId from './components/TestId';

import DisplayValue from './components/DisplayValue';
import GetTitle from "./components/GetTitle";
import AltText from './components/AltText'

const App = () => {
    return (
        <div>
          <FirstTest/>
            <OnchangeEvent/>
            <p> Learn React testing with jest</p>
            <OnclickEvent/>

            <MethodTesting/>

            <GetLabel/>

            <TestId/>

            <DisplayValue/>

            <GetTitle/>

            <AltText/>

        </div>
    );
};

export default App;