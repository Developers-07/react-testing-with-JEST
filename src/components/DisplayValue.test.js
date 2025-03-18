import {render, screen} from "@testing-library/react";
import DisplayValue from "./DisplayValue";

test("displayValue testing 1", ()=>{
    render(<DisplayValue />);
    let disVal = screen.getByDisplayValue("Zishan Kabir Chowdhury");
    expect(disVal).toBeInTheDocument();
})

test("displayValue testing 2", ()=>{
    render(<DisplayValue />);
    let radioVal = screen.getByDisplayValue("male");
    expect(radioVal).toBeInTheDocument();
})