const TabBar = require('../screenObjects/components/TabBar');

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('should be able to open the webview', async () => {
        TabBar.openWebView();
        await browser.pause(1000)
        // WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able to open the login form screen', async () => {
        TabBar.openLogin();
        await browser.pause(1000)
        // LoginScreen.waitForIsShown(true);
    });

    it('should be able to open the forms screen', async () => {
        TabBar.openForms();
        await browser.pause(1000)
        // FormsScreen.waitForIsShown(true);
    });

    it('should be able to open the swipe screen', async () => {
        TabBar.openSwipe();
        await browser.pause(1000)
        // SwipeScreen.waitForIsShown(true);
    });

    it('should be able to open the drag and drop screen', async () => {
        TabBar.openDrag();
        await browser.pause(1000)
        // DragScreen.waitForIsShown(true);
    });

    it('should be able to open the home screen', async () => {
        TabBar.openHome();
        await browser.pause(1000)
        // HomeScreen.waitForIsShown(true);
    });
});


