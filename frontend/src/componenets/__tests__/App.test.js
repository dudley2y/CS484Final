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


// describe("POST /register", () => {
//     describe("when passed a username and password", () => {
//       test("should respond with a 200 status code", async () => {
//         const response = await request(app).post("/register").send({
//           name: "name", 
//           username: "username", 
//           password: "password" 
//         })
//         expect(response.statusCode).toBe(200)
//       })
//     })
//   })

  describe("POST /logout", () => {
    describe("when passed a username and password", () => {
      test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/logout").send({
        })
        expect(response.statusCode).toBe(200)
      })
    })
  })