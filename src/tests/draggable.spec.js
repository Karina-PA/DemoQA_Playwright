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

    test("Item 'I'm contained within the box' should stay inside container after dragging up", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через верхнюю границу
        await draggablePage.withinBoxEl.dragTo(draggablePage.pointOutUp);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxUp).toHaveText("I'm contained within the box");
    });

    test("Item 'I'm contained within the box' should stay inside container after dragging down", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через нижнюю границу
        await draggablePage.withinBoxEl.dragTo(draggablePage.pointOutLow);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxUp).toHaveText("I'm contained within the box");
    });

    test("Item 'I'm contained within the box' should stay inside container after dragging to the left", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через левую границу
        await draggablePage.withinBoxEl.dragTo(draggablePage.pointOutLeft);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxUp).toHaveText("I'm contained within the box");
    });

    test("Item 'I'm contained within the box' should stay inside container after dragging to the right", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через правую границу
        await draggablePage.withinBoxEl.dragTo(draggablePage.pointOutRight);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxUp).toHaveText("I'm contained within the box");
    });

    test("Item 'I'm contained within my parent' should stay inside container after dragging up", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через верхнюю границу
        await draggablePage.withinParentEl.dragTo(draggablePage.pointOutUp);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxLow).toHaveText("I'm contained within my parent");
    });

    test("Item 'I'm contained within my parent' should stay inside container after dragging down", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через нижнюю границу
        await draggablePage.withinParentEl.dragTo(draggablePage.pointOutLow);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxLow).toHaveText("I'm contained within my parent");
    });

    test("Item 'I'm contained within my parent' should stay inside container after dragging to the left", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через левую границу
        await draggablePage.withinParentEl.dragTo(draggablePage.pointOutLeft);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxLow).toHaveText("I'm contained within my parent");
    });

    test("Item 'I'm contained within my parent' should stay inside container after dragging to the right", async ({ page }) => {
        const draggablePage = new DragabblePage(page);
        await draggablePage.containerRestrTab.click();
        // задаю перемещение через правую границу
        await draggablePage.withinParentEl.dragTo(draggablePage.pointOutRight);
        // проверяю, что элемент остался внутри контейнера
        await expect(draggablePage.boxLow).toHaveText("I'm contained within my parent");
    });

});