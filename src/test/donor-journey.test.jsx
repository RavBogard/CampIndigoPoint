import { cleanup, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, it, expect } from 'vitest';
import { DonatePage, RegistrationPage, ColoradoPage } from '../routes/CampPages';
import { actionLinks } from '../content/actions';
import { createElement } from 'react';
afterEach(cleanup);
const renderPage = page => render(<MemoryRouter>{createElement(page)}</MemoryRouter>);
describe('Registration and giving', () => {
  it('shows verified 2027 sessions and official registration links', () => {
    renderPage(RegistrationPage);
    const sessions=screen.getAllByRole('article');
    expect(within(sessions[0]).getByText('June 12–25, 2027')).toBeInTheDocument();
    expect(within(sessions[0]).getByText('$3,000')).toBeInTheDocument();
    expect(within(sessions[1]).getByText('June 12–19, 2027')).toBeInTheDocument();
    expect(within(sessions[1]).getByText('$1,700')).toBeInTheDocument();
    expect(screen.getByRole('link',{name:'Register for camp'})).toHaveAttribute('href',actionLinks.register.href);
    expect(document.getElementById('scholarships')).toHaveTextContent(/cannot pay the deposit/i);
    expect(screen.getByRole('link',{name:/Talk to Dan about scholarships/})).toHaveAttribute('href',expect.stringContaining('mailto:dan@'));
  });
  it('explains giving and uses the official fiscal sponsor donation form', () => {
    renderPage(DonatePage);
    expect(screen.getByRole('link',{name:'Donate to Indigo Point'})).toHaveAttribute('href',actionLinks.donate.href);
    expect(screen.getByText(/501\(c\)\(3\)/)).toHaveTextContent('Ashrei Foundation');
    expect(screen.getByText(/Full tuition for our two-week 2027/)).toHaveTextContent('$3,000');
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/40%|Covers a bunk|\$2,700/);
  });
  it('provides a Colorado inquiry without borrowing overnight dates or inventing tuition', () => {
    renderPage(ColoradoPage);
    expect(screen.getByRole('link',{name:/Ask about Colorado/})).toHaveAttribute('href',expect.stringContaining('mailto:info@campindigopoint.org'));
    expect(screen.getByText(/Past adventures/)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/June 12|\$3,800|\$3,000/);
  });
});
