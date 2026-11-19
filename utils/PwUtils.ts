
import { type Locator, expect } from '@playwright/test';

export default class PwUtils {

    async toBeVisible(ele: Locator) {
        await expect(ele).toBeVisible();
    }

    async fill(ele: Locator, input: string) {
        await ele.fill(input);
    }

    async click(ele: Locator) {
        await ele.click();
    }


}


