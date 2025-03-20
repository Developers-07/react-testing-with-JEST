import PropsTesting from "./PropsTesting";
import {logRoles, render, screen} from "@testing-library/react";


test("props testing", ()=>{
    const name = "Zishan";
    const {container} = render(<PropsTesting name={name}/>);
    const user = screen.getByText(`User Name : ${name}`);
    expect(user).toBeInTheDocument();
    //logRoles(container);
})