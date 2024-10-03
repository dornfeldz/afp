import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

test('megjeleníti a láblécet a várt linkekkel', () => {
  // A Footer megjelenítése MemoryRouter segítségével
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  // Ellenőrizzük, hogy megjelenik-e a "Privacy Policy" szöveg a láblécben
  const linkElement = screen.getByText(/privacy policy/i);
  expect(linkElement).toBeInTheDocument(); // Az elemnek léteznie kell a dokumentumban
});