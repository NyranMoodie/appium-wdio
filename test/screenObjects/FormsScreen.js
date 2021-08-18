class FormsScreen {


    async waitForIsShown() {
        await $('~Forms-screen').waitForDisplayed({ timeout: 10000 })
    }
}

module.exports = new FormsScreen()