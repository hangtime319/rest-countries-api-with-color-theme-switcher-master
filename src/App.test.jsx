import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const renderApp = () => render(<App />);

describe('App usability flow', () => {
  it('renders the header and allows searching for a country', async () => {
    const user = userEvent.setup();
    renderApp();

    expect(screen.getByRole('heading', { name: /where in the world/i })).toBeInTheDocument();

    const searchInput = await screen.findByRole('searchbox', { name: /search for a country/i });
    await user.type(searchInput, 'Brazil');

    expect(await screen.findByText(/Brazil/i)).toBeInTheDocument();
  });

  it('toggles dark mode and keeps the interface accessible', async () => {
    const user = userEvent.setup();
    renderApp();

    const themeButton = screen.getByRole('button', { name: /dark mode/i });
    await user.click(themeButton);

    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
  });
});
