import GetLabel from "./GetLabel";
import {render, screen} from "@testing-library/react";


test("getLabel testing 1", ()=>{
    render(<GetLabel />);

    const input1 = screen.getByLabelText("Username")
    expect(input1).toBeInTheDocument();
    expect(input1).toHaveValue("Zishan");
})

test("getLabel testing 2", ()=>{
    render(<GetLabel />);

    const checkbox = screen.getByLabelText("Skills")
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

})