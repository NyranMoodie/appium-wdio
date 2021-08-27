
import AppSettings from "./AppSettings";

class HomeScreen extends AppSettings {
    constructor() {
        super('~Home-screen');
    }

    get demoTextIOS(){return $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Demo app for the appium-boilerplate"`]')}
    get demoTextAndroid(){return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.TextView[2]')}

    async getDemoText()    {
      if(await browser.isAndroid){
        
        return await this.demoTextAndroid.getText()
      } else {
        return await this.demoTextIOS.getText()
      }
    }
}

export default new HomeScreen()