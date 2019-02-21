var client = {}
var fillCreate = require('../testAssets/fillCreate.js')
var fillEdit = require('../testAssets/fillEdit.js')
var fillLogin = require('../testAssets/fillLogin.js')
var fillData = require('../testAssets/fillData.js')

module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },


    'Create and Edit': browser => {
        browser.maximizeWindow()
        client
            //The set up
            .clickText('Sign up')
            .waitForElementPresent('.SignupModal-root-3YXgm')
            .clickText('Sign up with Email')


        // The action
        fillCreate(client, fillData.email, fillData.password, fillData.createFName, fillData.CreateLName, fillData.createMonth, fillData.createDay, fillData.CreateYear)
        client.clickText('Sign Up')
        client.userLogout()
        .waitForElementPresent('.container-fluid',1000)

            //the verification
            .clickText('Log in')
        fillLogin(client, fillData.email, fillData.password)
        client.click('@login')
            .waitForElementPresent('@userMenus')


        //The Set up
        client.waitForElementPresent('.container-fluid', 5000)

            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')

            //The Action
            .clearValue('@firstName')
            .clearValue('@lastName')
            .clearValue('@location')
            .clearValue('@describe')


        fillEdit(client, fillData.firstName, fillData.lastName, fillData.gender, fillData.month, fillData.day, fillData.year, fillData.location, fillData.description)

        //Save changes
        client.clickText('Save')
    },


    //Now verify changes were made
    'verify edit was successful': browser => {

        client.userLogout(),
            client.waitForElementPresent('.container-fluid', 5000)
    
                .clickText('Log in')


        fillLogin(client, fillData.email, fillData.password)
        
            client.waitForElementPresent('@userMenus')

            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')

        // Verification
        client.expect.element('@firstName').to.have.value.that.equals(fillData.firstName)
        client.expect.element('@lastName').to.have.value.that.equals(fillData.lastName)
        client.expect.element('@month').to.have.value.that.equals((parseInt(fillData.month)-1).toString())
        client.expect.element('@day').to.have.value.that.equals(fillData.day)
        client.expect.element('@year').to.have.value.that.equals(fillData.year)
        client.expect.element('@describe').to.have.value.that.equals(fillData.description)
        client.expect.element('@location').to.have.value.that.equals(fillData.location)








    }
}
