import AppSettings from './AppSettings';

class DragScreen extends AppSettings {

    constructor() {
        super('~Drag-drop-screen');
    }
    get dragL1() { return $('~drag-l1'); }
    get dragC1() { return $('~drag-c1'); }
    get dragR1() { return $('~drag-r1'); }
    get dragL2() { return $('~drag-l2'); }
    get dragC2() { return $('~drag-c2'); }
    get dragR2() { return $('~drag-r2'); }
    get dragL3() { return $('~drag-l3'); }
    get dragC3() { return $('~drag-c3'); }
    get dragR3() { return $('~drag-r3'); }
    get dropL1() { return $('~drop-l1'); }
    get dropC1() { return $('~drop-c1'); }
    get dropR1() { return $('~drop-r1'); }
    get dropL2() { return $('~drop-l2'); }
    get dropC2() { return $('~drop-c2'); }
    get dropR2() { return $('~drop-r2'); }
    get dropL3() { return $('~drop-l3'); }
    get dropC3() { return $('~drop-c3'); }
    get dropR3() { return $('~drop-r3'); }
    get renew() { return $('~renew'); }
    get retry() { return $('~button-Retry'); }

    /**
    * Drag an element to a position.
    */
    async dragElementTo(elementOne, elementTwo) {
        await driver.touchPerform([
            // Press the 'finger' on the first element. We provide the elementId here so
            // Appium can automatically determine the location of the element instead
            // of doing it ourselves
            {
                action: 'press',
                options: { element: elementOne.elementId },
            },
            // This will be the drag time
            {
                action: 'wait',
                options: { ms: 1000 },
            },
            // Move the finger to the second element where we want to release it
            // Appium can automatically determine the location of the element instead
            // of doing it ourselves
            {
                action: 'moveTo',
                options: { element: elementTwo.elementId },
            },
            // Release it
            {
                action: 'release',
            },
        ]);

        // // There is also a second option to make this work with the W3C actions command.
        // // This command is more verbose and a little but more complex.
        // // See https://github.com/jlipps/simple-wd-spec#perform-actions
        // // for a clear explanation of all properties
        // // Comment the above code and uncomment the below code to use the official W3C actions
        // driver.performActions([
        //     {
        //         // 1. Create the event
        //         type: 'pointer',
        //         id: 'finger1',
        //         parameters: { pointerType: 'touch' },
        //         actions: [
        //             // 2. Move finger into start position where the element is
        //             //    Appium can automatically determine the location of the element instead
        //             //    of doing it ourselves
        //             { type: 'pointerMove', duration: 0, origin: elementOne.elementId  },
        //             // 3. Finger comes down into contact with screen
        //             { type: 'pointerDown', button: 0 },
        //             // 4. Pause for a little bit
        //             { type: 'pause', duration: 100 },
        //             // 5. Finger moves to the second element.
        //             //    Appium can automatically determine the location of the element instead
        //             //    of doing it ourselves
        //             { type: 'pointerMove', duration: 250, origin: elementTwo.elementId  },
        //             // 6. Finger lets up, off the screen
        //             { type: 'pointerUp', button: 0 },
        //         ],
        //     },
        // ]);

        // Add a pause, just to make sure the drag and drop is done
        await driver.pause(1000);
    }
}

export default new DragScreen()