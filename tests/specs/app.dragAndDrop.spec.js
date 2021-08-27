import TabBar from "../screenObjects/components/TabBar";
import DragScreen from "../screenObjects/DragScreen";

;

describe('WebdriverIO and Appium, when using drag and drop', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openDrag();
        await DragScreen.waitForIsShown();
    });

    it('should be able to solve the puzzle by dragging the pieces into the puzzle', async () => {
        // Drag each element to the position
        await DragScreen.dragElementTo(await DragScreen.dragL2, await DragScreen.dropL2);
        
        // Complete the puzzle using the selectors in the DragScreen ScreenObject file

        expect(await DragScreen.getCongratulationsText()).toHaveText('Congratulations')
    });
});
