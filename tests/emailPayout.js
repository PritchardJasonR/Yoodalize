var client = {}
var fillLogin = require('../testAssets/fillLogin.js')
var fillPayout = require('../testAssets/fillPayout.js')
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

    'Send Email address verification': browser => {
        //The Set Up
        client
            .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

        
        fillLogin(client, fillData.email, fillData.password)
        client.pause(2000)

            .click('@userMenus')
            .clickText('Edit Profile')
            .clickText('Trust and Verification')
        client.pause(2000)

            // The Action
            .clickText('Verify Email')
        client.pause(5000)

    },

    'Link payout': browser => {
        //The  Set Up
        browser.maximizeWindow()

        client
            .click('@userMenus')
            .clickText('Account Settings')
            .waitForElementPresent('@payout')
            .click('@payout')
        client.pause(2000)
            .clickText('Add Payout Method')

        // The Action

        client.pause(1000)
            .waitForElementPresent('.panel-heading', 1000)

        fillPayout(client, fillData.address, fillData.city, fillData.state, fillData.zip)
            client.click('@next')
            .waitForElementPresent('.panel-body', 1000)
            .waitForElementPresent('@paypal')
            .click('@paypal')
            .click('@next')


            .waitForElementPresent('@payEmail')

            .setValue('@payEmail', fillData.paypalEmail)
            .click('@next')

            //Verification
            .waitForElementPresent('@defaultPayout')


        browser.end()
    }
}