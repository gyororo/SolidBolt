// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidBolt/i);
    expect(titleElement).toBeInTheDocument();
});
