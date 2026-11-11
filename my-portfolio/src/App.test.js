import { act, fireEvent, render, screen } from '@testing-library/react';
import NavigationBar from './components/NavigationBar/NavigationBar';

let media;

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-bs-theme');
  media = {
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => media);
});

test('toggles the theme and restores the saved choice on a new visit', () => {
  const { unmount } = render(<NavigationBar />);
  const toggle = screen.getByRole('button', { name: 'Switch to dark mode' });
  expect(toggle).toHaveAttribute('aria-pressed', 'false');
  fireEvent.click(toggle);
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  expect(screen.getByRole('button', { name: 'Switch to light mode' })).toHaveAttribute('aria-pressed', 'true');
  unmount();
  render(<NavigationBar />);
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'light');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
});

test('defaults to light even when the device prefers dark', () => {
  media.matches = true;
  render(<NavigationBar />);
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'light');
  expect(window.matchMedia).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
});

test('works when browser storage is blocked', () => {
  const read = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('Blocked'); });
  const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Blocked'); });
  try {
    render(<NavigationBar />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
  } finally {
    read.mockRestore();
    write.mockRestore();
  }
});

test('syncs a theme selected in another tab', () => {
  render(<NavigationBar />);
  act(() => {
    localStorage.setItem('portfolio-theme', 'dark');
    window.dispatchEvent(new StorageEvent('storage', { key: 'portfolio-theme' }));
  });
  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
});
