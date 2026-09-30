import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, it, expect } from 'vitest';
import { StaffPage, ContactPage, FaqPage } from '../routes/CampPages';
import brand from '../content/data/brand.json';
import { actionLinks } from '../content/actions';
import { createElement } from 'react';
afterEach(cleanup);
const renderPage=page=>render(<MemoryRouter>{createElement(page)}</MemoryRouter>);
describe('Staff, contact, and family answers', () => {
  it('offers current staff inquiries and describes responsibilities', () => {
    renderPage(StaffPage);
    screen.getAllByRole('link',{name:'Talk to us about staff'}).forEach(link=>expect(link).toHaveAttribute('href',actionLinks.apply.href));
    expect(screen.getByRole('heading',{name:'Great camp takes real work.'})).toBeInTheDocument();
    expect(screen.getByRole('heading',{name:'Care & wellness'})).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/compensation/);
    expect(document.body.textContent).not.toMatch(/Summer 2026|hardest job|ancestor/);
  });
  it('routes inquiries to the right people and provides actual press destinations', () => {
    renderPage(ContactPage);
    for(const contact of brand.contactDirectory) expect(screen.getByRole('link',{name:new RegExp(contact.email)})).toHaveAttribute('href',`mailto:${contact.email}`);
    expect(screen.getByRole('link',{name:'314-348-6412'})).toHaveAttribute('href','tel:3143486412');
    for(const press of brand.pressLinks) expect(screen.getByRole('link',{name:new RegExp(press.title)})).toHaveAttribute('href',press.url);
  });
  it('opens practical FAQ answers with an accessible native disclosure', () => {
    renderPage(FaqPage);
    const question=screen.getByText('Is this a gender education program?');
    fireEvent.click(question);
    // The native disclosure is operable without scripts; ensure its answer is associated.
    expect(question.closest('details')).toHaveTextContent('It’s summer camp.');
    expect(question.tagName).toBe('SUMMARY');
  });
});
