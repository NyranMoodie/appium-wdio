import DynamicPage from '../pageobjects/dynamic.page';

describe('dynamic loading', () => {
    it('should be an button on the page', async () => {
        await DynamicPage.open();
        expect(await DynamicPage.loadedPage.isExisting()).not.toExist()

        await DynamicPage.btnStart.click();
        await DynamicPage.loadedPage.waitForExist();

        expect(await DynamicPage.loadedPage.isExisting()).toExist()
    });
});


