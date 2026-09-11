// Covers theme resolution order (stored choice, then system preference) and
// the class/localStorage writes the blocking script in app/layout.tsx mirrors.
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from './theme-context';

function setSystemPrefersDark(prefersDark: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: query.includes('dark') ? prefersDark : false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

function Probe() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-testid="probe">
      {theme}
    </button>
  );
}

const renderProbe = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>
  );

const probe = () => screen.getByTestId('probe');

beforeEach(() => {
  document.documentElement.classList.remove('dark');
  setSystemPrefersDark(true);
});

describe('theme resolution', () => {
  it('follows the system preference when nothing is stored', () => {
    setSystemPrefersDark(false);
    renderProbe();
    expect(probe()).toHaveTextContent('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('follows a dark system preference when nothing is stored', () => {
    setSystemPrefersDark(true);
    renderProbe();
    expect(probe()).toHaveTextContent('dark');
    expect(document.documentElement).toHaveClass('dark');
  });

  it('prefers an explicit stored choice over the system preference', () => {
    setSystemPrefersDark(true);
    localStorage.setItem('theme', 'light');
    renderProbe();
    expect(probe()).toHaveTextContent('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('ignores a stored value that is not a theme', () => {
    setSystemPrefersDark(false);
    localStorage.setItem('theme', 'chartreuse');
    renderProbe();
    expect(probe()).toHaveTextContent('light');
  });
});

describe('toggling', () => {
  it('flips the theme, the class and the stored value', async () => {
    const user = userEvent.setup();
    setSystemPrefersDark(true);
    renderProbe();

    await user.click(probe());

    expect(probe()).toHaveTextContent('light');
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
    // Drives scrollbars and native controls; it stayed at the load-time value
    // when only the class was toggled.
    expect(document.documentElement.style.colorScheme).toBe('light');

    await user.click(probe());

    expect(probe()).toHaveTextContent('dark');
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });
});

describe('when localStorage is unavailable', () => {
  it('still renders and still applies the class', async () => {
    // Safari private mode and blocked-storage settings throw on access rather
    // than returning null, which would otherwise take the whole tree down.
    setSystemPrefersDark(true);
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('denied');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('denied');
    });

    const user = userEvent.setup();
    expect(() => renderProbe()).not.toThrow();
    expect(document.documentElement).toHaveClass('dark');

    await act(async () => {
      await user.click(probe());
    });
    expect(document.documentElement).not.toHaveClass('dark');
  });
});

describe('useTheme outside a provider', () => {
  it('throws a named error rather than returning undefined', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(
      /useTheme must be used within a ThemeProvider/
    );
  });
});
