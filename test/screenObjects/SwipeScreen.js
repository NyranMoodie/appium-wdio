class SwipeScreen {

    get logo() { return $('~WebdriverIO logo'); }

    async waitForIsShown() {
        await $('~Swipe-screen').waitForDisplayed({ timeout: 10000 })
    }
}

export default new SwipeScreen()