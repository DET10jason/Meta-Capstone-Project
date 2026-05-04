import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm static labels', () => {
    render(<BookingForm />);
    
    // Check for specific labels from your design
    const nameLabel = screen.getByText(/FIRST & LAST NAME/i);
    const dateLabel = screen.getByText(/DATE AND TIME/i);
    const guestsLabel = screen.getByText(/# OF PEOPLE/i);

    expect(nameLabel).toBeInTheDocument();
    expect(dateLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
});