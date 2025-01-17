class BasePage {
    constructor(page) {
        this.page = page;
        this.interactionsTab = page.locator('//*[text()="Interactions"]');
    }

    async gotoHomePage() {
        await this.page.goto('https://demoqa.com');
    }
    
}

module.exports = { BasePage };