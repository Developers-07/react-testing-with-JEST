import FindBy from "./FindBy";
import {render, screen} from "@testing-library/react";

test("FindBy testing", async ()=>{
    render(<FindBy/>)
    const content = await screen.findByText("data found")
    expect(content).toBeInTheDocument();
})