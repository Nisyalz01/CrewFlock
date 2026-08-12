// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewFlock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewFlock/i);
    expect(titleElement).toBeInTheDocument();
});
