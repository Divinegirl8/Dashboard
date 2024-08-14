import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from "./index";

describe('Table Component', () => {

    test('renders search input with correct attributes', () => {
        render(<Table/>);
        const inputElement = screen.getByRole('searchbox');

        expect(inputElement).toHaveAttribute('type', 'search');
        expect(inputElement).toHaveClass('w-80 h-11 rounded-custom-border-radius outline-none text-custom-font-size2 pl-2');
    });
    test('renders filter button', () => {
        render(<Table />);
        const filterButton = screen.getByText(/filter/i);
        expect(filterButton).toBeInTheDocument();
    });

    test('renders table headers', () => {
        render(<Table />);
        const headers = ['Name', 'Email', 'Phone', 'Company Name'];
        headers.forEach((header) => {
            const tableHeader = screen.getByText(header);
            expect(tableHeader).toBeInTheDocument();
        });
    });

    test('renders specific table rows', () => {
        render(<Table />);

        const row1 = screen.getByText(/John Doe/i, { selector: 'tbody > tr:nth-of-type(1) > td:nth-of-type(1)' });
        const row2 = screen.getByText(/john.doe@example.com/i, { selector: 'tbody > tr:nth-of-type(1) > td:nth-of-type(2)' });
        const row3 = screen.getByText(/\(123\) 456-7890/i, { selector: 'tbody > tr:nth-of-type(1) > td:nth-of-type(3)' });
        const row4 = screen.getByText(/Acme Corp/i, { selector: 'tbody > tr:nth-of-type(1) > td:nth-of-type(4)' });

        expect(row1).toBeInTheDocument();
        expect(row2).toBeInTheDocument();
        expect(row3).toBeInTheDocument();
        expect(row4).toBeInTheDocument();
    });

});
