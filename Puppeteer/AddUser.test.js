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

    test('Adding a User and checking if they have been added to the list', async () => {
        await page.goto('http://localhost:3000'); // Replace with the URL of your app

        // Example: Interact with your app
        await page.type('input[id="username"]', 'John Doe');
        await page.type('input[id="age"]', '30');
        await page.click('button[type="submit"]');

        // Wait for the component to update
        await page.waitForTimeout(1000);

        // Check if the user is added to the list
        const userList = await page.$eval('.UsersList_users__VGi9n', (list) => list.textContent);
        expect(userList).toContain('John Doe');
    });
});
