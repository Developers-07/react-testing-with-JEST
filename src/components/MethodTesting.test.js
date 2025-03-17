
import MethodTesting from "./MethodTesting";
import {fireEvent, render, screen} from "@testing-library/react";
import handleOther from "../helper";

test('Method testing', ()=>{
    render(<MethodTesting/>);
    const btn = screen.getByRole("button");
    //const btn = screen.getByRole("button"); why is it failed???
    fireEvent.click(btn);
    expect(screen.getByText("Hi!!")).toBeInTheDocument();
})

test('Method testing 2', ()=>{
    expect(handleOther()).toMatch("hello!");

})