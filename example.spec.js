// @ts-check
const { test, expect } = require('@playwright/test');

test('Go from Register page to Login', async ({ page }) => {
  // Open Register
  await page.goto('http://localhost:3000/register');

  // Find and click 'Click here to log in'
  await page.getByRole('link', { name: 'Click here to log in' }).click();

  // Check if you have been redirected to the Login page
  await expect(page).toHaveURL('http://localhost:3000/login');
});

test('Login by filling the login form with the details of a user that exists in the database', async ({ page }) => {
  // Open Login
  await page.goto('http://localhost:3000/login');

  // Find and fill 'Username' field
  await page.getByLabel('Username').fill('d');

  // Find and fill 'Password' field
  await page.getByLabel('Password').fill('d');

  // Click the button element
  await page.getByRole('button').click();

  // Check if you have been redirected to the Home page
  await expect(page).toHaveURL('http://localhost:3000/home');
});

test('Go from Register page to Home through Logo', async ({ page }) => {
  // Open Register
  await page.goto('http://localhost:3000/register');

  // Find and click the logo 'Sammalhabe Forum'
  await page.getByRole('link', { name: 'Sammalhabe Forum' }).click();

  // Check if you have been redirected to the Home page
  await expect(page).toHaveURL('http://localhost:3000/home');
});

