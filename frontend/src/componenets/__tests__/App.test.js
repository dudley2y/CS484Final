import { render, screen } from '@testing-library/react';
import App from '../../App';
import Login from '../Login';
import Loginform from '../Loginform';
import '@testing-library/jest-dom'

describe("Block of tests for jest", () => {
  test('renders learn react link', () => {
    render(<Loginform />);
    const linkElement = screen.getByText(/Username/i);
    expect(linkElement).toBeInTheDocument();
  });
});