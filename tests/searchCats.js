var client = {}
// var data = require('../testAssets/dataDriven')
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Login and search through categories': browser => {
        
        client.userLogin()
        client.click('@tools')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@outgear')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@electronics')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@party')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@vehicles')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@clothing')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@kitchen')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@toys')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@lawn')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@sports')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@business')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@venues')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@experts')
        client.waitForElementPresent('[class="sc-eInJlc lXOAW"]')
        .click('@homepage')
        .click('@experiences')
    }
}
       