import GetTitle from "./GetTitle";
import {render, screen} from "@testing-library/react";


test("getByTitle testing 1", ()=>{
    render(<GetTitle/>);
    let titleVal1 = screen.getByTitle("click me");
    expect(titleVal1).toBeInTheDocument();
})

test("getByTitle testing 2", ()=>{
    render(<GetTitle/>);
    let titleVal2 = screen.getByTitle("black spade");
    expect(titleVal2).toBeInTheDocument();
})