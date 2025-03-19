import QueryBy from "./QueryBy";
import {render, screen} from "@testing-library/react";


test("QueryBy testing", ()=>{
    render(<QueryBy/>);
    //const query = screen.queryByText("Log in")
    const query1 = screen.queryByText("Log in")
    //expect(query).toBeInTheDocument();
    expect(query1).toBeInTheDocument();
})