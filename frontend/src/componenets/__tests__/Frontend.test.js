import App from '../../App';
import Login from '../Login';
import Loginform from '../Loginform';
import { render, screen } from '@testing-library/react';
import request from 'supertest'
import '@testing-library/jest-dom'

describe("Block of tests for jest", () => {
  test('renders learn react link', () => {
    render(<Loginform />);
    const usrname = screen.getByText(/Username/i);
    const pssword = screen.getByText(/Password/i);
    expect(usrname).toBeInTheDocument();
    expect(pssword).toBeInTheDocument();
  });
});