import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders footer with links', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  // Ellenőrizzük, hogy a linkek megjelennek
  expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
  expect(screen.getByText(/terms and conditions/i)).toBeInTheDocument();
});