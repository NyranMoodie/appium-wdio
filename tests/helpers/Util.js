/**
 * Get the time difference in seconds
 */
export function timeDifference(string, start, end) {
    const elapsed = (end - start) / 1000;
    console.log(`${string} It took ${elapsed} seconds.`);
}

/**
 * Create a cross platform solution for opening a deep link
 */
export async function openDeepLinkUrl(url) {
    const prefix = 'wdio://';

    if (await browser.isAndroid) {
        // Life is so much easier
        return await browser.execute('mobile:deepLink', {
            url: `${prefix}${url}`,
            package: 'com.wdiodemoapp',
        });
    }

    // Launch Safari to open the deep link
    await browser.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

    // Add the deep link url in Safari in the `URL`-field
    // This can be 2 different elements, or the button, or the text field
    // Use the predicate string because  the accessibility label will return 2 different types
    // of elements making it flaky to use. With predicate string we can be more precise
    const urlButtonSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'URL\'';
    const urlFieldSelector = 'type == \'XCUIElementTypeTextField\' && name CONTAINS \'URL\'';
    const urlButton = `-ios predicate string:${urlButtonSelector}`
    const urlField = `-ios predicate string:${urlFieldSelector}`


    await $('~URL').click()
    // Submit the url and add a break
    await $(urlField).setValue(`${prefix}${url}\uE007`);

    /**
     * PRO TIP:
     * if you started the iOS device with `autoAcceptAlerts:true` in the capabilities then Appium will auto accept the alert that should
     * be shown now. You can then comment out the code below
     */
    // Wait for the notification and accept it
    try {
        const openSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'Open\'';
        const openButton = await $(`-ios predicate string:${openSelector}`);
        await openButton.waitForDisplayed();
        await openButton.click();
    } catch (e) {
        // ignore
    }
}

