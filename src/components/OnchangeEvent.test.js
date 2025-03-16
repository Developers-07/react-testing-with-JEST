
import OnchangeEvent from "./OnchangeEvent";
import {fireEvent, render, screen} from "@testing-library/react";

test("onChange Event test", () =>{
    render(<OnchangeEvent/>);
    let input = screen.getByRole("textbox");

    fireEvent.change(input, {target:{value:"a"}});

    expect(input.value).toBe("a");

})