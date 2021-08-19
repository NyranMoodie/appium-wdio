const TabBar = require('../screenobjects/components/TabBar');
const SwipeScreen = require('../screenobjects/SwipeScreen');
const Carousel = require('../screenobjects/components/Carousel');
const Gestures = require('../helpers/Gestures');

describe('WebdriverIO and Appium, when using swiping', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openSwipe();
        await SwipeScreen.waitForIsShown(true);
    });

    it('should be able to swipe horizontal by swiping the carousel from left to right', async () => {
        /**
         * To understand what happens in `getNthCardText()` please check the method
         */
        expect(await Carousel.getNthCardText('first')).toContain('FULLY OPEN SOURCE');
        /**
         * To understand what happens in `swipeLeft()` please check the method
         */
        await SwipeScreen.swipeLeft()
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('GREAT COMMUNITY');


        await SwipeScreen.swipeLeft();
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('JS.FOUNDATION');

        await SwipeScreen.swipeLeft()
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('SUPPORT VIDEOS');

        await SwipeScreen.swipeLeft()
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('EXTENDABLE');
        await SwipeScreen.swipeLeft()
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('COMPATIBLE');

        /**
         * To understand what happens in `swipeRight()` please check the method
         */
        await SwipeScreen.swipeRight();
        await browser.pause(1000)
        expect(await Carousel.getNthCardText('active')).toContain('EXTENDABLE');

        await SwipeScreen.swipeRight();
        await SwipeScreen.swipeRight();
        await SwipeScreen.swipeRight();
        await SwipeScreen.swipeRight();
        expect(await Carousel.getNthCardText('first')).toContain('FULLY OPEN SOURCE');
    });

    it('should be able to swipe vertical by finding the surprise', async () => {
        // Swipe up and try to find the element. You can only swipe a max of 5 times
        await SwipeScreen.swipeUp()
        await SwipeScreen.swipeUp()
        await SwipeScreen.swipeUp()
        expect(await SwipeScreen.logo).toBeDisplayed();
    });
});
