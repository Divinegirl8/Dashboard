import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Table from "./index";
import {Provider} from "react-redux";
import {store} from "../../app/store";



const mockPaginatedData = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        company: { name: 'Acme Corp' }
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '987-654-3210',
        company: { name: 'Globex Inc' }
    }
];

describe('Table component', () => {

    test('renders search input with correct attributes', () => {
        render(
            <Provider store={store}>
                <Table />
            </Provider>
        );

        const inputElement = screen.getByTestId('search-input');

        expect(inputElement).toHaveAttribute('type', 'search');
        expect(inputElement).toHaveClass('w-80 h-11 rounded-custom-border-radius outline-none text-custom-font-size2 pl-2');
    });

    test('renders filter button', () => {
        render(
            <Provider store={store}>
                <Table />
            </Provider>
        );
        const filterButton = screen.getByText(/filter/i);
        expect(filterButton).toBeInTheDocument();
    });

    test('renders table headers', () => {
        render(
            <Provider store={store}>
                <Table />
            </Provider>
        );
        const headers = ['Name', 'Email', 'Phone', 'Company Name'];
        headers.forEach((header) => {
            const tableHeader = screen.getByText(header);
            expect(tableHeader).toBeInTheDocument();
        });
    });

});
