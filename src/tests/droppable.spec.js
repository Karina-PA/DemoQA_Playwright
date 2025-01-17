const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pageObjects/basePage');
const { DroppablePage } = require('../pageObjects/droppablePage');
const { NavBar } = require('../pageObjects/navBar');

test.beforeEach(async ({ page }) => {
    const basePage = new BasePage(page);
    const navBar = new NavBar(page);
    await basePage.gotoHomePage();
    await basePage.interactionsTab.click();
    await navBar.droppableTab.click();
})

test.describe('Simple Tab Test', () => {

    test('Shoud get a message "Dropped!" when drop item into the block', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.dragMeSimpEl.dragTo(droppablePage.dropHereSimpBox);
        await expect(droppablePage.dropHereSimpBox).toHaveText('Dropped!');
    });

});

test.describe('Accept Tab Tests', () => {

    test('Shoud get a message "Dropped!" when drop item "Acceptable" into the block', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.acceptTab.click();
        await droppablePage.aceptableEl.dragTo(droppablePage.dropHereAccepBox);
        await expect(droppablePage.dropHereAccepBox).toHaveText('Dropped!');
    });

    test('Should not switch a message in the block when drop item "Not Acceptable" into it', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.acceptTab.click();
        await droppablePage.notAcceptableEl.dragTo(droppablePage.dropHereAccepBox);
        await expect(droppablePage.dropHereAccepBox).toHaveText(await droppablePage.defaultMesAcc);
    })
});

test.describe('Prevent Propogation Tab Tests', () => {

    test('Shoud get a message "Dropped!" in each block when drop item into the "Inner droppable (not greedy)" block', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.preventPropogTab.click();
        await droppablePage.dragMePrevEl.dragTo(droppablePage.notGreedyBox);
        await expect(droppablePage.notGreedyBox).toHaveText('Dropped!');
        await expect(droppablePage.boxUp).toHaveText('Dropped!');
    });

    test('Shoud get a message "Dropped!" only in "Inner droppable (greedy)" block when drop item into it', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.preventPropogTab.click();
        await droppablePage.dragMePrevEl.dragTo(droppablePage.greedyBox);
        await expect(droppablePage.greedyBox).toHaveText('Dropped!');
        await expect(droppablePage.boxLow).not.toHaveText('Dropped!');
    });

});

test.describe('Revert Draggable Tab Tests', () => {

    test('Should return "Will revert" item to origin place after draggable', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.revertDragTab.click();
        await droppablePage.revertEl.dragTo(droppablePage.dropBoxRev);
        // таймаут, чтобы элемент вернулся в исходную позицию (без него показывает позицию элемента внутри блока)
        await page.waitForTimeout(500);
        await expect(droppablePage.dropBoxRev).toHaveText('Dropped!');
        await expect(await droppablePage.revertEl.getAttribute('style')).toBe(droppablePage.positionRevEl);
    });

    test('Should not return "Not revert" item to origin place after draggable', async ({ page }) => {
        const droppablePage = new DroppablePage(page);
        await droppablePage.revertDragTab.click();
        let positionNotRevEl = await page.locator('#notRevertable').getAttribute("style");
        await droppablePage.notRevertEl.dragTo(droppablePage.dropBoxRev);
        await expect(droppablePage.notRevertEl.getAttribute('style')).not.toBe(positionNotRevEl);
    });
})