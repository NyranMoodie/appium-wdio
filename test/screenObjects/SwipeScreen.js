class SwipeScreen {

    get logo() { return $('~WebdriverIO logo'); }

    async swipeLeft() {
        // do a horizontal swipe by percentage
        const startPercentage = 90;
        const endPercentage = 10;
        const anchorPercentage = 50;

        const { width, height } = await driver.getWindowSize();

        console.log(width, height)
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPercentage / 100;
        const endPoint = width * endPercentage / 100;
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: startPoint,
                    y: anchor,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 100,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor,
                },
            },
            {
                action: 'release',
                options: {},
            },
        ]);
    }
    async swipeRight() {
        // do a horizontal swipe by percentage
        const startPercentage = 10;
        const endPercentage = 90;
        const anchorPercentage = 50;
        const { width, height } = await driver.getWindowSize();
        console.log(width, height)
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPercentage / 100;
        const endPoint = width * endPercentage / 100;
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: startPoint,
                    y: anchor,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 100,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor,
                },
            },
            {
                action: 'release',
                options: {},
            },
        ]);
    }
    async swipeUp() {
        // do a horizontal swipe by percentage
        const startPercentage = 10;
        const endPercentage = 90;
        const anchorPercentage = 50;
        const { width, height } = await driver.getWindowSize();
        console.log(width, height)
        const anchor = height * anchorPercentage / 100;
        const startPoint = height * startPercentage / 100;
        const endPoint = height * endPercentage / 100;
        console.log(anchor, startPoint, endPoint)
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 0,
                    y: 700,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 100,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: 0,
                    y: 100,
                },
            },
            {
                action: 'release',
                options: {},
            },
        ]);
    }


    async dynamicSwipe(direction) {

    }

    async waitForIsShown() {
        await $('~Swipe-screen').waitForDisplayed({ timeout: 10000 })
    }
}

module.exports = new SwipeScreen()