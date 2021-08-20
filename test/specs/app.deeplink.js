import TabBar from '../screenobjects/components/TabBar';
import WebViewScreen from '../screenobjects/WebviewScreen';
import LoginScreen from '../screenobjects/LoginScreen';
import FormsScreen from '../screenobjects/FormsScreen';
import SwipeScreen from '../screenobjects/SwipeScreen';
import HomeScreen from '../screenobjects/HomeScreen';
import DragScreen from '../screenobjects/DragScreen';
import { openDeepLinkUrl } from '../helpers/Util';

describe('WebdriverIO and Appium, when navigating by deep link', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('should be able to open the webview', async () => {
        openDeepLinkUrl('webview');
        await WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able to open the login form screen', async () => {
        openDeepLinkUrl('login');
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able to open the forms screen', async () => {
        openDeepLinkUrl('forms');
        FormsScreen.waitForIsShown(true);
    });

    it('should be able to open the swipe screen', async () => {
        openDeepLinkUrl('swipe');
        SwipeScreen.waitForIsShown(true);
    });

    it('should be able to open the drag and drop screen', async () => {
        openDeepLinkUrl('drag');
        DragScreen.waitForIsShown(true);
    });

    it('should be able to open the home screen', async () => {
        openDeepLinkUrl('home');
        HomeScreen.waitForIsShown(true);
    });
});
