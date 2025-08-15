import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the theme context
jest.mock('../contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }) => <div data-testid='theme-provider'>{children}</div>,
}));

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<AppWithRouter />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('has skip to main content link for accessibility', () => {
    render(<AppWithRouter />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('renders navigation', () => {
    render(<AppWithRouter />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<AppWithRouter />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('main content has correct id for skip link', () => {
    render(<AppWithRouter />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });
});
