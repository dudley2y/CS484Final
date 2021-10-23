import { render, screen } from '@testing-library/react';
import request from 'supertest'
import '@testing-library/jest-dom'

import App from '../../App';
import Login from '../Login';
import Loginform from '../Loginform';
import app from '../../../../backend/index.js'

// describe("Block of tests for jest", () => {
//   test('renders learn react link', () => {
//     render(<Loginform />);
//     const linkElement = screen.getByText(/Username/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// });


// test fails only because jest cant access the database 
describe("POST /register", () => {
  describe("PASS TEST: When passed a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/register").send({
        name: "name", 
        username: "username", 
        password: "password" 
      })
      expect(response.statusCode).toBe(200)
    })
  })
})

describe("POST /logout", () => {
  describe("PASS TEST: Test should pass with expected value", () =>{
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/logout").send({
      })
      expect(response.statusCode).toBe(200)
    })
  })
})

describe("POST /youtube_api_search", () => {
  describe("FAIL TEST: Test should return 200, expect 401 and expect to fail on purpose", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/youtube_api_search").send({
      search_string: "https://www.youtube.com"
      })
      expect(response.statusCode).toBe(400)
    })
  })
})


test("GET")