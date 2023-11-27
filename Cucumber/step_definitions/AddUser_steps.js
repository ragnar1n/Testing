// AddUser_steps.js
const { Given, When, Then, After } = require('cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

Given('the user is on the registration page', async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
});

When('they fill in the username with {string} and age with {string}', async function (username, age) {
    await page.type('input[id="username"]', username);
    await page.type('input[id="age"]', age);
});

When('they submit the form', async function () {
    await page.click('button[type="submit"]');
});

Then('the user should be added to the list', async function () {
    await page.waitForSelector('.UsersList_users__VGi9n');
    const userList = await page.$eval('.UsersList_users__VGi9n', (list) => list.textContent);
    assert.ok(userList.includes('John Doe'), 'Expected user "John Doe" to be in the list');
});

After(async function () {
    if (browser) {
        await browser.close();
        page = undefined;
    }
});
