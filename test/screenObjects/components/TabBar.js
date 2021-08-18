class TabBar {
    get home() { return $('~Home') }
    get webView() { return $('~Webview') }
    get login() { return $('~Login') }
    get forms() { return $('~Forms') }
    get swipe() { return $('~Swipe') }
    get drag() { return $('~Drag') }

    async openHome() {
        await this.home.click();
    }

    async openWebView() {
        await this.webView.click()
    }

    async openLogin() {
        await this.login.click()
    }

    async openForms() {
        await this.forms.click()
    }

    async openSwipe() {
        await this.swipe.click()
    }

    async openDrag() {
        await this.drag.click()
    }

    async waitForTabBarShown() {
        await this.home.waitForDisplayed({ timeout: 3000 });
    }
}
module.exports = new TabBar();