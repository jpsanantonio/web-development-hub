// Covers the item shape the nav actually passes in. The props declared an
// `icon` component while lib/utils/navigation.ts supplies `iconName`, so the
// mobile menu resolved an icon for every entry and then rendered none of them.
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addIcon } from '@iconify/react';
import { NavigationItem } from './navigation-item';
import type { NavigationItem as NavigationItemType } from '@/lib/utils/navigation';

const ITEM: NavigationItemType = {
  id: 'section-communities',
  title: 'Communities',
  iconName: 'mdi:account-group',
};

// Iconify fetches unknown icons from its API and paints an empty placeholder
// until they arrive. Registering the data locally is how Iconify supports
// bundled icons, and it makes the rendered <svg> assertable offline.
addIcon(ITEM.iconName, {
  body: '<path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>',
  width: 24,
  height: 24,
});

describe('mobile variant', () => {
  it('renders an icon element for the item it was given', () => {
    const { container } = render(
      <NavigationItem
        item={ITEM}
        isActive={false}
        onClick={vi.fn()}
        variant="mobile"
        href="/communities"
      />
    );

    expect(screen.getByText('Communities')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders without an icon when the item has no iconName', () => {
    const { container } = render(
      <NavigationItem
        item={{ id: 'home', title: 'Home' }}
        isActive
        onClick={vi.fn()}
        variant="mobile"
        href="/"
      />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('links to the href it was given and marks the active page', () => {
    render(
      <NavigationItem
        item={ITEM}
        isActive
        onClick={vi.fn()}
        variant="mobile"
        href="/communities"
      />
    );

    const link = screen.getByRole('link', { name: /Communities/ });
    expect(link).toHaveAttribute('href', '/communities');
    expect(link).toHaveAttribute('aria-current', 'page');
  });

  it('falls back to a button when there is no href', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <NavigationItem
        item={ITEM}
        isActive={false}
        onClick={onClick}
        variant="mobile"
      />
    );

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});

describe('desktop variant', () => {
  it('renders a labelled dot rather than the title text', () => {
    render(
      <NavigationItem
        item={ITEM}
        isActive={false}
        onClick={vi.fn()}
      />
    );

    expect(
      screen.getByRole('button', {
        name: 'Navigate to Communities section',
      })
    ).toBeInTheDocument();
    expect(screen.queryByText('Communities')).not.toBeInTheDocument();
  });
});
