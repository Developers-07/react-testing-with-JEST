
import {act, render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import UserEvent from "./UserEvent";

test("userEvent library for onClick event testing", async ()=>{
    userEvent.setup();

    render(<UserEvent/>);
    let btn = screen.getByText("Click me");
    await userEvent.click(btn);
    expect(await screen.findByTestId("userData")).toBeInTheDocument();
    expect(screen.getByText("Hello Zishan")).toBeInTheDocument();
})

test("userEvent library for onChange event testing", async ()=>{
    let user = userEvent.setup();

    render(<UserEvent/>);
    let txt = screen.getByRole("textbox");
    await user.type(txt, "Disha");
    expect(screen.getByText("Disha")).toBeInTheDocument();
})

test("userEvent library for act function testing", async ()=>{
    let user = userEvent.setup();

    render(<UserEvent/>);
    let txt1 = screen.getByRole("textbox");
    await act(async ()=>{
        await user.type(txt1, "Disha");
    })
    expect(screen.getByText("Disha")).toBeInTheDocument();
})

