class DragabblePage {
    constructor(page) {
        this.page = page;
        this.containerRestrTab = page.locator('#draggableExample-tab-containerRestriction');
        this.withinBoxEl = page.locator('//*[@class="draggable ui-widget-content ui-draggable ui-draggable-handle"]');
        this.withinParentEl = page.locator('//*[@class="ui-widget-header ui-draggable ui-draggable-handle"]');
        this.boxUp = page.locator('#containmentWrapper');
        this.boxLow = page.locator('//*[@class="draggable ui-widget-content m-3"]');
        this.pointOut = page.locator('.dragable-container>h1');
    }
}

module.exports = { DragabblePage };