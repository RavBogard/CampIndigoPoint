import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { createSiteRouter } from '../router';

const renderRoute = path => render(<RouterProvider router={createSiteRouter([path])} />);
afterEach(cleanup);
beforeEach(() => { document.head.innerHTML = ''; });

describe('Camp Poster website', () => {
  it.each(['/', '/camp-life', '/registration', '/colorado', '/families', '/donate', '/staff', '/about', '/faq', '/contact'])('renders %s with current metadata and no public host location', async path => {
    renderRoute(path);
    expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(document.title).toContain('Camp Indigo Point');
    expect(document.querySelector('link[rel=canonical]')).toHaveAttribute('href', `https://www.campindigopoint.org${path}`);
    expect(document.body.textContent).not.toMatch(/Manitowa|Benton|June 6|Summer 2026|\$2,700/);
    expect(document.querySelector('meta[name=description]').content).not.toMatch(/Manitowa|Benton|danielbogard.com/);
    expect(screen.getByRole('link', { name: 'Camp Indigo Point home' }).querySelector('img')).toHaveAttribute('src', '/brand/logo.png');
  });
  it('offers overnight, Colorado, donor, and staff paths from home', () => {
    renderRoute('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Camp.With yourpeople./i);
    for (const [name, href] of [['Find your summer','/registration'],['Explore Colorado','/colorado'],['Give a kid camp','/donate'],['Work at Indigo Point','/staff']]) {
      expect(screen.getByRole('link', {name})).toHaveAttribute('href',href);
    }
  });
  it('closes the mobile menu with Escape and returns focus to its button', () => {
    renderRoute('/');
    const menu = screen.getByRole('button', {name:/Menu/});
    fireEvent.click(menu);
    expect(menu).toHaveAttribute('aria-expanded','true');
    expect(screen.getByRole('navigation', {name:'Mobile navigation'})).toBeInTheDocument();
    fireEvent.keyDown(document, {key:'Escape'});
    expect(menu).toHaveAttribute('aria-expanded','false');
    expect(menu).toHaveFocus();
  });
  it('navigates from the mobile menu and focuses page content', async () => {
    renderRoute('/');
    fireEvent.click(screen.getByRole('button', {name:/Menu/}));
    fireEvent.click(within(screen.getByRole('navigation',{name:'Mobile navigation'})).getByRole('link',{name:'Colorado'}));
    await waitFor(()=>expect(document.title).toContain('Colorado Teen Program'));
    expect(screen.queryByRole('navigation',{name:'Mobile navigation'})).not.toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveFocus();
  });
  it('keeps historic URLs working and provides a helpful missing-page state', async () => {
    const view=renderRoute('/counselors');
    await waitFor(()=>expect(document.title).toContain('Staff |'));
    view.unmount();
    const history=renderRoute('/history');
    await waitFor(()=>expect(document.title).toContain('About Camp'));
    history.unmount();
    renderRoute('/missing-page');
    expect(screen.getByRole('heading',{level:1})).toBeInTheDocument();
    expect(document.title).toContain('Page Not Found');
  });
});
