import { test } from '@playwright/test';

test("Test 1", { tag: '@Smoke' }, async () => {
    console.log('I am test case 1');
});

test("Test 2", { tag: '@Sanity' }, async () => {
    console.log('I am test case 2');
});

test("Test 3", { tag: ['@Smoke', '@Sanity'] }, async () => {
    console.log('I am test case 3');
});

test("Test 4", { tag: ['@Qa', '@Stage'] }, async () => {
    console.log('I am test case 4');
});

test("Test 5", { tag: ["@Sanity", '@Regression'] }, async () => {
    console.log('I am test case 5');
});

test("Test 6", { tag: '@Regression' }, async () => {
    console.log('I am test case 6');
});


