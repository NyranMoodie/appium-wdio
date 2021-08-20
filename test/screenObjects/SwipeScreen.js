import AppSettings from './AppSettings';

class SwipeScreen extends AppSettings {

    constructor() {
        super('~Swipe-screen');
    }

    get logo() { return $('~WebdriverIO logo'); }

}

export default new SwipeScreen()