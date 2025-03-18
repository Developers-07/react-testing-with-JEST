import React from 'react';

const TestId = () => {
    return (
        <div>
            <h1>getAllByTestId</h1>

            {/*<div data-testid="testCase1">*/}
            {/*    This is all about testId;*/}
            {/*</div>*/}

            {/*<div data-testid="testCase1">*/}
            {/*    This is all about testId 2;*/}
            {/*</div>*/}

            {/*<div data-testid="testCase1">*/}
            {/*    This is all about testId 3;*/}
            {/*</div>*/}

            <div id="div1">
                Override data through configure
            </div>

        </div>
    );
};

export default TestId;