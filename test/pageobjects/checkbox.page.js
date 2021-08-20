import Page from './page';

class CheckboxPage extends Page {
    /**
     * define elements
     */
    get lastCheckbox() { return $('#checkboxes input:last-Child'); }
    get firstCheckbox() { return $('#checkboxes input:first-Child'); }

    /**
     * overwrite specificoptions to adapt itto page object
     */
    open() {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();
