
import OnclickEvent from './OnclickEvent'
import {fireEvent, render, screen} from "@testing-library/react";

test("OnClick Testing", ()=>{
    render(<OnclickEvent/>)
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Successfully Updated")).toBeInTheDocument();
})
