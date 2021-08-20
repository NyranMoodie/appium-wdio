import WebView from "../helpers/WebView";

class WebViewScreen extends WebView {

    async waitForWebViewIsDisplayedByXpath(isShown = true) {
        const selector = browser.isAndroid ? '*//android.webkit.WebView' : '*//XCUIElementTypeWebView';
        await $(selector).waitForDisplayed({
            timeout: 45000,
            reverse: !isShown,
        });
    }
}

export default new WebViewScreen()