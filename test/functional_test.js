// test/functional_test.js

const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();

describe('GPT-4 Website and Source Code Repository', function() {
    this.timeout(30000);

    beforeEach(async function() {
        await driver.get('http://localhost:3000');
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('should have the correct title', async function() {
        let title = await driver.getTitle();
        assert.equal(title, 'GPT-4 Website and Source Code Repository');
    });

    it('should navigate to Introduction when clicked', async function() {
        let link = await driver.findElement(By.linkText('Introduction'));
        await link.click();
        let title = await driver.getTitle();
        assert.equal(title, 'Introduction - GPT-4 Website and Source Code Repository');
    });

    it('should navigate to Features when clicked', async function() {
        let link = await driver.findElement(By.linkText('Features'));
        await link.click();
        let title = await driver.getTitle();
        assert.equal(title, 'Features - GPT-4 Website and Source Code Repository');
    });

    // Add more tests as needed for other navigation links and functionalities
});
