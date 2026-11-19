import { test } from '@playwright/test';


test('First Test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const nameField = page.getByRole('textbox', { name: 'Enter Name', exact: true });
    const nameField1 = page.getByPlaceholder('Enter Name');

    const listItem2 = page.getByText('List item 2 with ');
    const submitFormButton = page.getByText('Submit Form');

    const emailAddress = page.getByLabel('Email Address:');
    const Standard = page.getByLabel(' Standard');

    const logoImg = page.getByAltText('logo image');

    const homePageLink = page.getByTitle('Home page link');
    const editProfile = page.getByTestId('edit-profile-btn');













});








