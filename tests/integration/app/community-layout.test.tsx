import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CommunityLayout from '@/app/(community)/layout';

function renderLayout() {
  return render(
    <CommunityLayout params={Promise.resolve({})}>
      <p>conteúdo</p>
    </CommunityLayout>,
  );
}

describe('CommunityLayout', () => {
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
});
