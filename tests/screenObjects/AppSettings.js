export default class WebView {

    selector;
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown(isShown = true) {
        return await $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }

}


