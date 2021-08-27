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
        await DragScreen.dragElementTo(await DragScreen.dragL1, await DragScreen.dropL1);
        await DragScreen.dragElementTo(await DragScreen.dragC1, await DragScreen.dropC1);
        await DragScreen.dragElementTo(await DragScreen.dragR1, await DragScreen.dropR1);
        await DragScreen.dragElementTo(await DragScreen.dragL2, await DragScreen.dropL2);
        await DragScreen.dragElementTo(await DragScreen.dragC2, await DragScreen.dropC2);
        await DragScreen.dragElementTo(await DragScreen.dragR2, await DragScreen.dropR2);
        await DragScreen.dragElementTo(await DragScreen.dragL3, await DragScreen.dropL3);
        await DragScreen.dragElementTo(await DragScreen.dragC3, await DragScreen.dropC3);
        await DragScreen.dragElementTo(await DragScreen.dragR3, await DragScreen.dropR3);
        
        // Complete the puzzle using the selectors in the DragScreen ScreenObject file

        expect(await DragScreen.getCongratulationsText()).toHaveText('Congratulations')
    });
});
