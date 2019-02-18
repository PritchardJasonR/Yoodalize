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
    'Add a profile photo and documents': browser => {
        //log in to account
        browser.maximizeWindow()
        client.userLogin()

            // navigate to add profile photo page
            .click('@userMenus')
            .clickText('Edit Profile')
            .waitForElementPresent('.EditProfile-container-clc6i')
            .clickText('Profile Photo')

            // add a photo
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/userPhoto.jpg'))
        
        // verification
        client.waitForElementPresent('@photoTrash')
        
        
        //Navigate to adding Documents
        .clickText('Trust and Verification')
        .waitForElementPresent('@addDocument')
        .click('@addDocument')


        //Test
        client.waitForElementPresent('input[type="file"]', 5000)
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/doc1.jpg'))
        client.waitForElementPresent('.DocumentList-listPhotoMedia-1_GqT')
            .setValue('input[type="file"]', require('path').resolve('/Users/Equa1/Desktop/Dev/Yood/images/doc2.pdf'))
        client.waitForElementPresent('.listPhotoContainer')
        client.pause(5000)

        //verification
        client.userLogout()
        client.userLogin()
            .click('@userMenus')
            .clickText('Edit Profile')
            .clickText('Trust and Verification')
            .waitForElementPresent('@addDocument')
            .click('@addDocument')
        client.waitForElementPresent('.listPhotoContainer', 1000)



        client.end()
    },
}