class HomeScreen {

    async waitForIsShown() {
        await $('~Home-screen').waitForDisplayed({ timeout: 10000 })
    }
}

export default new HomeScreen()