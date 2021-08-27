import TabBar from '../screenObjects/components/TabBar';
import DragScreen from '../screenObjects/DragScreen';
import FormsScreen from '../screenObjects/FormsScreen';
import HomeScreen from '../screenObjects/HomeScreen';
import LoginScreen from '../screenObjects/LoginScreen';
import SwipeScreen from '../screenObjects/SwipeScreen';
import WebViewScreen from '../screenObjects/WebViewScreen';

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('should be able to open the webview', async () => {
        await TabBar.openWebView();
        WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able to open the login form screen', async () => {
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown()
    });

    it('should be able to open the forms screen', async () => {
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('should be able to open the swipe screen', async () => {
        await TabBar.openSwipe();
        await SwipeScreen.waitForIsShown(true);
    });

    it('should be able to open the drag and drop screen', async () => {
        await TabBar.openDrag();
        await DragScreen.waitForIsShown(true);
    });

    it('should be able to open the home screen', async () => {
        await TabBar.openHome();
        await HomeScreen.waitForIsShown(true);
    });
});


