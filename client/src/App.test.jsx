import { render, screen } from '@testing-library/react';
import App from './App';

// Mielőtt a tesztek lefutnának, a `window.scrollTo` függvényt mock-oljuk,
// hogy elkerüljük a "Not implemented" hibát a tesztelési környezetben.
beforeAll(() => {
  window.scrollTo = vi.fn();
});

test('megkeresi és ellenőrzi a TastyGo szöveget az oldalon', () => {
  // Az App komponens renderelése a tesztelési környezetben
  render(<App />);
  
  // Keressük meg az összes olyan elemet, amelyben a "TastyGo" szöveg szerepel, és kiválasztjuk mindet.
  const allHeadings = screen.getAllByText((content, element) => {
    return element.textContent === 'TastyGo';
  });

  // Ellenőrizzük, hogy pontosan két ilyen elem létezik az oldalon
  expect(allHeadings.length).toBe(2);

  // Ellenőrizzük, hogy az első elem valóban megtalálható-e a dokumentumban
  expect(allHeadings[0]).toBeInTheDocument();
});