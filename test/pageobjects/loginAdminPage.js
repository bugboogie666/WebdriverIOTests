import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginAdminPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[id="signup_form_email"');
    }

    get inputPassword () {
        return $('input[id="signup_form_password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get help_email_notification(){
        return $('div[id="signup_form_email_help"]:nth-child(1)')
    }

    get empty_password_notification(){
        return $('div[id="signup_form_password_help"]:nth-child(1)')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open("",'admin');
    }
}

export default new LoginAdminPage();
