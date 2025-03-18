import {configure, render, screen} from "@testing-library/react";
import TestId from "./TestId";



// test("TestId testing case", ()=>{
//     render(<TestId/>);
//     const div = screen.getAllByTestId("testCase1");
//     for(let i=0; i<div.length; i++){
//         expect(div[i]).toBeInTheDocument();
//     }
// })



configure({testIdAttribute: "id"});

test("TestId override testing case", ()=>{
    render(<TestId/>);
    const div = screen.getByTestId("div1");
    expect(div).toBeInTheDocument();

})