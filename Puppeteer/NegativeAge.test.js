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

    test('Submit with negative age and check for error', async () => {
        await page.goto('http://localhost:3000');

        // Fill fields with negative age
        await page.type('input[id="username"]', 'John Doe');
        await page.type('input[id="age"]', '-5');

        // Click submit
        await page.click('button[type="submit"]');

        // Wait for the error modal to appear
        await page.waitForSelector('.Error_modal__U-cY4');

        // Check if the error message is present
        const errorMessage = await page.$eval('.Error_modal__U-cY4', (errorModal) => errorModal.textContent);
        expect(errorMessage).toContain('Please enter a valid age (higher than 0)');
    });
});
