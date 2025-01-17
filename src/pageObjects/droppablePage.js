class DroppablePage {
    constructor(page) {
        this.page = page;
        // Simple Tab
        this.dragMeSimpEl = page.locator('#draggable');
        this.dropHereSimpBox = page.locator('#simpleDropContainer .drop-box');
        // Accept Tab
        this.acceptTab = page.locator('#droppableExample-tab-accept');
        this.aceptableEl = page.locator('#acceptable');
        this.notAcceptableEl = page.locator('#notAcceptable');
        this.dropHereAccepBox = page.locator('.accept-drop-container #droppable');
        this.defaultMesAcc = page.locator('.accept-drop-container #droppable').textContent();
        // Prevent Propogation Tab
        this.preventPropogTab = page.locator('#droppableExample-tab-preventPropogation');
        this.dragMePrevEl = page.locator('#dragBox');
        this.notGreedyBox = page.locator('#notGreedyInnerDropBox');
        this.greedyBox = page.locator('#greedyDropBoxInner');
        this.boxUp = page.locator('#notGreedyDropBox>p');
        this.boxLow = page.locator('#greedyDropBox>p')
        // Revert Draggable Tab
        this.revertDragTab = page.locator('#droppableExample-tab-revertable');
        this.revertEl = page.locator('#revertable');
        this.notRevertEl = page.locator('#notRevertable');
        this.dropBoxRev = page.locator('#revertableDropContainer>#droppable');
        this.positionRevEl = 'position: relative; left: 0px; top: 0px;';
    }
}

module.exports = { DroppablePage };