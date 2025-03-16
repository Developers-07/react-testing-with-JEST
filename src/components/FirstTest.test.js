

import {render, screen} from "@testing-library/react";
import FirstTest from './FirstTest'

test("First testing", () =>{
    render(<FirstTest />);
    let myText = screen.getByRole("textbox");
    let placeholderText = screen.getByPlaceholderText("Enter your name")
    expect(myText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(myText).toHaveAttribute("name","username");
    expect(myText).toHaveAttribute("value", "Zishan");
});