import TabBar from '../screenobjects/components/TabBar';
import SwipeScreen from '../screenobjects/SwipeScreen';
import Carousel from '../screenobjects/components/Carousel';
import Gestures from '../helpers/Gestures';

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
        await Carousel.swipeLeft()
        expect(await Carousel.getNthCardText('active')).toContain('GREAT COMMUNITY');

        await Carousel.swipeLeft();
        expect(await Carousel.getNthCardText('active')).toContain('JS.FOUNDATION');

        await Carousel.swipeLeft()
        expect(await Carousel.getNthCardText('active')).toContain('SUPPORT VIDEOS');

        await Carousel.swipeLeft()
        expect(await Carousel.getNthCardText('active')).toContain('EXTENDABLE');

        await Carousel.swipeLeft()
        expect(await Carousel.getNthCardText('active')).toContain('COMPATIBLE');

        /**
         * To understand what happens in `swipeRight()` please check the method
         */
        await Carousel.swipeRight();
        expect(await Carousel.getNthCardText('active')).toContain('EXTENDABLE');

        await Carousel.swipeRight();
        await Carousel.swipeRight();
        await Carousel.swipeRight();
        await Carousel.swipeRight();
        expect(await Carousel.getNthCardText('first')).toContain('FULLY OPEN SOURCE');

    });

    it('should be able to swipe vertical by finding the surprise', async () => {
        // Swipe up and try to find the element. You can only swipe a max of 1 times
        await Gestures.checkIfDisplayedWithSwipeUp(await SwipeScreen.logo, 5);
        expect(await SwipeScreen.logo).toBeDisplayed();
    });
});
