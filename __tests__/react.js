import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/index';
import Navbar from '../src/components/Navbar';

describe('Unit testing React components', () => {
  describe('Renders App', () => {
    beforeEach(async () => {
      const app = await render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    })
    test('Navbar renders', () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

      );
      const homeLink = screen.getByText('Home');
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).getAttribute('href').toBe('/');
    })
  })
})
