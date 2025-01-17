class NavBar {
    constructor(page) {
        this.page = page;
        this.droppableTab = page.locator('//*[text()="Droppable"]');
        this.draggableTab = page.locator('//*[text()="Dragabble"]');
    }
}

module.exports = { NavBar };