import {screen,render} from "@testing-library/react";
import React from "react";
import Customer from "./index";
import {Provider} from "react-redux";
import {store} from "../../app/store";


describe("customer component", () =>{
    test('testing for image alt',()=>{
     render(<Provider store={store}>
       <Customer/>
        </Provider>)
        const imgAlt = screen.getByAltText("dummy profile pic")
        expect(imgAlt).toBeInTheDocument()
    })


    test('testing for text value',()=>{
        render(<Provider store={store}>
            render(<Customer/>)
        </Provider>)

        const dashboard = screen.getByText("Dashboard")
        const task = screen.getByText("Task")
        const customer = screen.getByText("Customers")
        const chat = screen.getByText("Chats")
        const dispute = screen.getByText("Disputes")
        const setting = screen.getByText("Settings")

        expect(dashboard).toBeInTheDocument()
        expect(task).toBeInTheDocument()
        expect(customer).toBeInTheDocument()
        expect(chat).toBeInTheDocument()
        expect(dispute).toBeInTheDocument()
        expect(setting).toBeInTheDocument()
    })

})