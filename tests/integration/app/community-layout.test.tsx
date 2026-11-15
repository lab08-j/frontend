import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import CommunityLayout from '@/app/(community)/layout';

// The navbar reads the current route; the test controls it here.
const navigation = vi.hoisted(() => ({ pathname: '/' }));
vi.mock('next/navigation', () => ({ usePathname: () => navigation.pathname }));

function renderLayout() {
  return render(
    <CommunityLayout params={Promise.resolve({})}>
      <p>conteúdo</p>
    </CommunityLayout>,
  );
}

describe('CommunityLayout', () => {
  beforeEach(() => {
    navigation.pathname = '/';
  });

  it('renders header, main content and footer', () => {
    renderLayout();

    expect(screen.getByRole('banner')).toHaveTextContent('Juniando');
    expect(screen.getByRole('main')).toHaveTextContent('conteúdo');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('offers a skip link to the main content', () => {
    renderLayout();

    expect(screen.getByRole('link', { name: 'Pular para o conteúdo' })).toHaveAttribute(
      'href',
      '#conteudo',
    );
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo');
  });

  it('shows search, write, notifications and user menu in the navbar', () => {
    renderLayout();
    const header = within(screen.getByRole('banner'));

    expect(header.getByRole('searchbox', { name: 'Pesquisar' })).toBeInTheDocument();
    expect(header.getByRole('link', { name: 'Escrever' })).toHaveAttribute(
      'href',
      '/nova-publicacao',
    );
    expect(header.getByRole('link', { name: 'Notificações' })).toBeInTheDocument();
    expect(header.getByRole('button', { name: 'Menu do usuário' })).toBeInTheDocument();
  });

  it('swaps "Escrever" for "Explorar Feed" on the new post page', () => {
    navigation.pathname = '/nova-publicacao';
    renderLayout();

    expect(screen.queryByRole('link', { name: 'Escrever' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Explorar Feed' })).toHaveAttribute('href', '/');
  });

  it('opens the mobile menu with the community sections', async () => {
    const user = userEvent.setup();
    renderLayout();

    await user.click(screen.getByRole('button', { name: 'Abrir menu' }));

    const sections = await screen.findByRole('navigation', { name: 'Seções da comunidade' });
    expect(within(sections).getByRole('link', { name: 'Feed Principal' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('lists the footer links', () => {
    renderLayout();
    const footerNav = screen.getByRole('navigation', { name: 'Rodapé' });

    expect(
      within(footerNav)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(['Diretrizes de Convivência', 'Artigos', 'Discord', 'Mentoria Voluntária']);
  });
});
