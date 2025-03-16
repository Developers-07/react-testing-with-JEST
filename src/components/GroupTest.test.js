
import GroupTest from "./GroupTest";
import {render, screen} from "@testing-library/react";

test("test case 1", ()=>{
    render(<GroupTest />);
    let element = screen.getByText("Grouping by using Describe");
    expect(element).toBeInTheDocument()
})

test("test case 2", ()=>{
    render(<GroupTest />);
    let element = screen.getByText("Grouping by using Describe");
    expect(element).toBeInTheDocument()
})

describe("Group 1", ()=>{
    test("test case 1", ()=>{
        render(<GroupTest />);
        let element = screen.getByText("Grouping by using Describe");
        expect(element).toBeInTheDocument()
    })
    test("test case 2", ()=>{
        render(<GroupTest />);
        let element = screen.getByText("Grouping by using Describe");
        expect(element).toBeInTheDocument()
    })
    test("test case 3", ()=>{
        render(<GroupTest />);
        let element = screen.getByText("Grouping by using Describe");
        expect(element).toBeInTheDocument()
    })

    describe("Inner Group", ()=>{
        test("test case 1", ()=>{
            render(<GroupTest />);
            let element = screen.getByText("Grouping by using Describe");
            expect(element).toBeInTheDocument()
        })
    })
})
