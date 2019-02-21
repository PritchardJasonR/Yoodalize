var client = {}
module.exports = {
    beforeEach: browser => {
        client = browser.page.objects()
        client.navigate()
            .waitForElementPresent('.container-fluid', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Add an item': browser => {
        browser.maximizeWindow()
        client.hannahLogin()
            client.listYourStuff()
            client.descriptionInput()
            client.addressInput()
            client.priceInput()
            client.rulesInput()
            client.availabilityInput()
            client.photoInput('profilePic.jpg')
            client.review()
    },


}