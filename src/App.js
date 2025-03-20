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

import TextMatch from './components/TextMatch'
import QueryBy from './components/QueryBy'
import FindBy from './components/FindBy'
import WithinFun from './components/WithinFun'

import UserEvent from './components/UserEvent'
import PropsTesting from './components/PropsTesting'


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

            <TextMatch/>

            <QueryBy/>

            <FindBy/>

            <WithinFun/>

            <UserEvent/>

            <PropsTesting name="Disha"/>

        </div>
    );
};

export default App;