const puppeteer = require('puppeteer');

describe('App Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Submit without filling fields and check for error', async () => {
        await page.goto('http://localhost:3000');

        // Click submit without filling fields
        await page.click('button[type="submit"]');

        // Wait for the error modal to appear
        await page.waitForSelector('.Error_modal__U-cY4');

        // Check if the error message is present
        const errorMessage = await page.$eval('.Error_modal__U-cY4', (errorModal) => errorModal.textContent);
        expect(errorMessage).toContain('Please enter a valid name or age (No empty values)');
    });
});
