import WithinFun from "./WithinFun";
import {render, screen, within} from "@testing-library/react";

test("Parent child testing", ()=>{
    render(<WithinFun />);
    const parent = screen.getByText("Hello");
    const child = within(parent).getByText("Hi")
    const subChild = within(child).getByRole("button");

    expect(parent).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    expect(subChild).toBeInTheDocument();
})