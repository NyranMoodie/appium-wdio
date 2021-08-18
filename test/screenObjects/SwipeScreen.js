class SwipeScreen {

    async waitForIsShown() {
        await $('~Swipe-screen').waitForDisplayed({ timeout: 10000 })
    }
}

module.exports = new SwipeScreen()