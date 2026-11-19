import { test } from '@playwright/test';


test('01 Test', async ({ page }) => {
    console.log("01 Test");
});

test('02 Test', async ({ page }) => {
    console.log("02 Test");
});

test('03 Test', async ({ page }) => {
    console.log("03 Test");
});

test('04 Test', async ({ page }) => {
    console.log("04 Test");
});

// 30 sec == 3 times
test('05 Test', async ({ page }) => {
    console.log("05 Test");
    test.slow();
});


