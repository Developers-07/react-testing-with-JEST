
import CustomRole from './CustomRole.js'
import {render, screen} from "@testing-library/react";


test('Custom Role', () => {
    render(<CustomRole />);
    let txt = screen.getByRole("dummyText");

    let btn = screen.getByRole("button", {name: "Log in"});
    let btn2 = screen.getByRole("button", {name: "Log out"});

    let input1 = screen.getByRole("textbox", {name: "User Name"});
    let input2 = screen.getByRole("textbox", {name: "User Age"});
    expect(txt).toBeInTheDocument();

    expect(btn).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();

    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument();

})