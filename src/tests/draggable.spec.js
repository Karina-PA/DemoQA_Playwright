const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pageObjects/basePage');
const { NavBar } = require('../pageObjects/navBar');
const { DragabblePage } = require('../pageObjects/draggablePage');


test.beforeEach(async ({ page }) => {
    const basePage = new BasePage(page);
    const navBar = new NavBar(page);
    await basePage.gotoHomePage();
    await basePage.interactionsTab.click();
    await navBar.draggableTab.click();
})

test.describe('Container Restricted Tab Tests', () => {

    test("Item 'I'm contained within the box' should stay inside container after dragging", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // указываю точку для перемещения за пределами контейнера
        await draggablePage.withinBoxEl.dragTo(draggablePage.pointOut);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxUp).toHaveText("I'm contained within the box");
    });

    test("Item 'I'm contained within my parent' should stay inside container after dragging", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await page.click('#draggableExample-tab-containerRestriction');
        // указываю точку для перемещения за пределами контейнера
        await draggablePage.withinParentEl.dragTo(draggablePage.pointOut);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxLow).toHaveText("I'm contained within my parent");
    });

});