import Gestures from '../helpers/Gestures';
import TabBar from '../screenobjects/components/TabBar';
import FormScreen from '../screenobjects/FormsScreen';
import Picker from '../screenobjects/components/Picker';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with form elements,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormScreen.waitForIsShown();
    });

    it('should be able type in the input and validate the text', async () => {
        const text = 'Hello, this is a demo app';
        await FormScreen.input.setValue(text);
        await browser.pause(1000);
        expect(await FormScreen.inputTextResult.getText()).toEqual(text);

        /**
         * IMPORTANT!!
         *  Because the app is not closed and opened between the tests
         *  (and thus is NOT starting with the keyboard hidden)
         *  the keyboard is closed here if it is still visible.
         */
        if (await browser.isKeyboardShown()) {
            /**
             * Normally we would hide the keyboard with this command `driver.hideKeyboard()`, but there is an issue for hiding the keyboard
             * on iOS when using the command. You will get an error like below
             *
             *  Request failed with status 400 due to Error Domain=com.facebook.WebDriverAgent Code=1 "The keyboard on iPhone cannot be
             *  dismissed because of a known XCTest issue. Try to dismiss it in the way supported by your application under test."
             *  UserInfo={NSLocalizedDescription=The keyboard on iPhone cannot be dismissed because of a known XCTest issue. Try to dismiss
             *  it in the way supported by your application under test.}
             *
             * That's why we click outside of the keyboard.
             */
            await FormScreen.inputTextResult.click();
        }
    });

    it('should be able turn on and off the switch', async () => {
        expect(await FormScreen.isSwitchActive()).toEqual(false);

        await FormScreen.switch.click();
        expect(await FormScreen.isSwitchActive()).toEqual(true);

        await FormScreen.switch.click();
        expect(await FormScreen.isSwitchActive()).toEqual(false);
    });

    it('should be able select a value from the select element', async () => {
        const valueOne = 'This app is awesome';
        const valueTwo = 'webdriver.io is awesome';
        const valueThree = 'Appium is awesome';

        await FormScreen.dropDown.click();
        await Picker.selectValue(valueOne);
        await browser.pause(1000);
        expect(await FormScreen.getDropDownText()).toContain(valueOne);

        await FormScreen.dropDown.click();
        await Picker.selectValue(valueTwo);
        await browser.pause(1000);
        expect(await FormScreen.getDropDownText()).toContain(valueTwo);

        await FormScreen.dropDown.click();
        await Picker.selectValue(valueThree);
        await browser.pause(1000);
        expect(await FormScreen.getDropDownText()).toContain(valueThree);
    });

    it('should be able to open the alert and close it with all 3 buttons', async () => {
        await Gestures.checkIfDisplayedWithSwipeUp(FormScreen.activeButton, 2);
        await FormScreen.activeButton.click();
        await NativeAlert.waitForIsShown(true);
        expect(await NativeAlert.text()).toEqual('This button is\nThis button is active');

        /**
         * The following steps don't contain any assertions. This might look strange, but
         * the `waitForIsShown`-method is the verification. If the element is there, it will
         * click on it, and we can also verify if the element is not there. Both can be seen
         * as assertions so we don't need to do double assertions per action (wait for the element
         * to be there, and when it's there, expect that it's there)
         */
        await NativeAlert.pressButton('Ask me later');
        await NativeAlert.waitForIsShown(false);
        await FormScreen.activeButton.click();
        await NativeAlert.waitForIsShown(true);
        await NativeAlert.pressButton('Cancel');
        await NativeAlert.waitForIsShown(false);
        await FormScreen.activeButton.click();
        await NativeAlert.waitForIsShown(true);
        await NativeAlert.pressButton('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able to determine that the inactive button is inactive', async () => {
        // Depending on the size of the screen we might need to scroll. This methods determines if it's visible,
        // if not, it will automatically scroll to find it. This will be done two times.
        await Gestures.checkIfDisplayedWithSwipeUp(await FormScreen.inActiveButton, 2);
        // In this case the button can't be asked if it is active or not with
        // `expect(FormScreen.inActiveButton.isEnabled()).toEqual(false);`
        // So use a click and check if shown, make sure the alert is not there
        await NativeAlert.waitForIsShown(false);
        await FormScreen.inActiveButton.click();
        // Just wait 1 second to be sure it didn't appear
        await browser.pause(1000);
        // Now validate it isn't there
        await NativeAlert.waitForIsShown(false);
    });
});
