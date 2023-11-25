import { expect } from '@wdio/globals'
import LoginAdminPage from '../pageobjects/loginAdminPage.js'

describe('Tymbe login feature', async ()=>
{
    it('As a user, I want the error notification for empty username is being displayed correctly when I click login button', async ()=>
    {
        await LoginAdminPage.open()       

        console.log(await browser.getTitle())
        
        await LoginAdminPage.login("","gumidci")

        const element = await LoginAdminPage.help_email_notification

        await element.waitForDisplayed({timeout: 1000})

        await expect(element).toHaveText("Prosím vložte Vaš E-mail")

    })


    it('As a user, I want the error notification for empty password is being displayed correctly when I click login button', async ()=>
    {
        await LoginAdminPage.open()               

        console.log(await browser.getTitle())
        
        await LoginAdminPage.login("jaws@gmail.com","")

        const element = await LoginAdminPage.empty_password_notification

        await element.waitForDisplayed({timeout: 1000})

        await expect(element).toHaveText("Prosím vložte Vaše heslo")

    })


    it('As a user, I want the error notification for invalid email address is being displayed correctly when I put an incorrect email', async ()=>
    {
        await LoginAdminPage.open()       

        console.log(await browser.getTitle())
        
        await LoginAdminPage.inputUsername.setValue("jaws@gmail.")

        const element = await LoginAdminPage.help_email_notification

        await element.waitForDisplayed({timeout: 1000})

        await expect(element).toHaveText("Prosím vložte platný E-mail")
    })

})