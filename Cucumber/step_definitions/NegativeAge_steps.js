const { Given, When, Then, After } = require('cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert'); // Import the assert module

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

Then('an error should be displayed with the message {string}', async function (errorMessage) {
    await page.waitForSelector('.Error_modal__U-cY4');
    const actualErrorMessage = await page.$eval('.Error_modal__U-cY4', (errorModal) => errorModal.textContent);
    assert.ok(actualErrorMessage.includes(errorMessage), `Expected "${actualErrorMessage}" to include "${errorMessage}"`);
});

After(async function () {
    if (browser) {
        await browser.close();
        page = undefined;
    }
});

