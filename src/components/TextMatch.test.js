import TextMatch from "./TextMatch";
import {render, screen} from "@testing-library/react";


test("Text match testing", ()=>{
    render(<TextMatch/>);
    const text = screen.getByText(/Hello worlD/i);
    expect(text).toBeInTheDocument();
})

test("Text match testing with function", ()=>{
    render(<TextMatch/>);
    const text = screen.getByText((content)=>content.startsWith("Hello"));
    const text1 = screen.getByText((content)=>content.endsWith("World"));
    const text2 = screen.getByText((content)=>{
        return content.includes("lo Wo")
    })
    expect(text).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
})


