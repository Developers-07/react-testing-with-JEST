import AltText from "./AltText";
import {render, screen} from "@testing-library/react";


test("getByAltText testing", ()=>{
    render(<AltText/>)
    let getImg = screen.getByAltText("testing image");
    expect(getImg).toBeInTheDocument();
})
