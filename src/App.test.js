import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';
import Address from './components/Address';
import Property from './components/Property';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Address', () => {
  const data = {
    line1: 'Flat 5',
    line4: '7 Westbourne Terrace',
    postCode: 'W2 3UL',
    city: 'London',
    country: 'U.K.',
  };
  ReactTestUtils.act(() => {
    ReactDOM.render(<Address {...data} />, container);
  });
  const rootDiv = container.querySelector('div');
  expect(rootDiv.children[0].textContent).toBe('Address:');
  expect(rootDiv.children[1].textContent).toBe('Flat 5');
  expect(rootDiv.children[2].textContent).toBe('7 Westbourne Terrace');
  expect(rootDiv.children[3].textContent).toBe('W2 3UL, London');
});

it('renders Property', () => {
  const addressData = {
    line1: 'Flat 5',
    line4: '7 Westbourne Terrace',
    postCode: 'W2 3UL',
    city: 'London',
    country: 'U.K.',
  };
  const propertyData = {
    owner: "carlos",
    address: addressData,
    airbnbId: 3512500,
    numberOfBedrooms: 1,
    numberOfBathrooms: 1,
    incomeGenerated: 2000.34,
    guest: 1,
    pricePerNight: 150,
  };
  ReactTestUtils.act(() => {
    ReactDOM.render(<Property {...propertyData} />, container);
  });
  const rootDiv = container.querySelector('div');
  expect(rootDiv.children[1].textContent).toBe('1 bedroom(s), 1 bathroom(s)');
  expect(rootDiv.children[2].textContent).toBe('For 1 guest(s), £150 per night');
});
