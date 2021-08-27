import NativeAlert from '../screenObjects/components/NativeAlert';
import TabBar from '../screenObjects/components/TabBar';
import HomeScreen from '../screenObjects/HomeScreen';
import LoginScreen from '../screenObjects/LoginScreen';

describe('Home Page', () => {

    it('Verify that the user is on the home pages', async () => {    
        await HomeScreen.getDemoText()
        // expect(await HomeScreen.demoText.getText()).toContain('Demo app for the appium-boilerplate')
    });

   
});


