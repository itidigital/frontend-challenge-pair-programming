import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render App title', () => {
    render(<App />);
    expect(screen.getByText(/Desafio Iti/i)).toBeInTheDocument();
  })

  it('render transactions list', () => {
    render(<App />);
    const list = screen.getByTestId("transactions-list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(5)
  })
});
