import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Это тестовый проект Цвигула Дениса Андреевича!!/i);
  // const linkElement = screen.getByText(/Это тестовый проект/i);
  expect(linkElement).toBeInTheDocument();
});
