//yoodalize objects
var yoodCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    createUser: function (field) {

        this
            .clickText('Sign up')
            .waitForElementPresent('.modal-title', 5000)
            .clickText('Sign up with Email')
            .waitForElementPresent('.control-label', 5000)

            // fill user info
            .setValue('@firstName', 'Tim')
            .setValue('@lastName', 'Granger')
            .setValue('@email', 'tom@fake.com')
            .setValue('@password', '12345678')
            .setValue('@month', '8')
            .setValue('@day', '31')
            .setValue('@year', '1952')

            // submit info and verify account created
            .click('@login')
            .waitForElementPresent('@userMenus', 5000)


        return this
    },
    userLogin: function (userLogin) {
        //The set up
        this
            .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

            //The action
            .setValue('@email', 'tom@fake.com')
            .setValue('@password', '12345678')
            .click('@login')

            //The Verification
            .waitForElementPresent('@userMenus')

        return this
    },
    hannahLogin: function (userLogin) {
        //The set up
        this
            .clickText('Log in')
            // .waitForElementPresent('h4.modal-title', 5000)
            // .waitForElementVisible('body', 1000)

            //The action
            .setValue('@email', 'hniel08@gmail.com')
            .setValue('@password', 'moonstone')
            .click('@login')

            //The Verification
            .waitForElementPresent('@userMenus')

        return this
    },
    //the next few are for posting an item 

    listYourStuff: function (userLogin) {
        this
            .waitForElementPresent('body')
            .clickText('List Your Stuff')
            .clickText('GET STARTED')

        return this
    },
    descriptionInput: function () {
        //The set up
        this
            .waitForElementPresent('@dDescription')
            .setValue('@dTitle', 'Space Ranger')
            .setValue('@dDescription', 'Here to protect the intergalactic world')
            .clickText('Toys and Games')

        this.expect.element('@nextItem').text.to.equal('Save & Next: Address').before(5000)
        this.expect.element('@nextItem').to.be.visible
        this.click('@nextItem')


        return this
    },
    addressInput: function () {
        //The set up
        this
            .waitForElementPresent('@zipcode')
            .setValue('@streetAddress', '700 West 200 North')
            // .setValue('@optionalAddress', 'Here to protect the intergalactic world')
            .setValue('@city', 'Lehi')
            .setValue('@state', 'Utah')
            .setValue('@zipcode', '84043')
        this.expect.element('@nextItem').text.to.equal('Save & Next: Price').before(5000)
        this.click('@nextItem')

        return this
    },
    priceInput: function () {
        //The set up
        this
            .waitForElementPresent('@pricing')
            .setValue('@pricing', '1')
        this.expect.element('@nextItem').text.to.equal('Save & Next: Rules').before(5000)
        this.click('@nextItem')

        return this
    },
    rulesInput: function () {
        //The set up
        this
            .waitForElementPresent('@inputRule')
        this.setValue('@enterRule', ['F', this.api.Keys.ENTER])
            // .clickText('Facebook account must be shared')
            .setValue('@inputRule', 'Confucism is the way to deal with my stuff')
            .click('@addRule')
        this.expect.element('@nextItem').text.to.equal('Save & Next: Availability').before(5000)
        this.click('@nextItem')

        return this
    },

    availabilityInput: function () {

        this
            .waitForElementPresent('@nextItem', 5000)

        // this.clickDay()

        this.expect.element('@nextItem').text.to.equal('Next: Photos').before(5000)
        this.click('@nextItem')

        return this

    },
    photoInput: function (image) {
        //The set up
        this
            .waitForElementPresent('@nextItem', 5000)

        this.setValue("input[type=file]",
            require('path').resolve(`/Users/Owner/Pictures/Cartoons/Fun/${image}`))
            .pause(2000)
        this.expect.element('@nextItem').text.to.equal('Save & Next: Review').before(5000)
        this.click('@nextItem')

        return this
    },
    review: function () {
        //The set up
        this
            .waitForElementPresent('@acceptItem', 5000)
         this.expect.element('@acceptItem').to.not.be.selected
         this.expect.element('@termsItem').to.not.be.selected
        this.click('@acceptItem')
        this.click('@termsItem')
        .pause(5000)
        this.click('@publishItem')
        .waitForElementPresent('@viewListing', 5000)
        .click('@viewListing')
        .pause(5000)
        this.expect.element('@editListingPage').to.be.present 



        return this
    },
    userLogout: function (userLogout) {
        // The set up
        this
            .waitForElementPresent('@userMenus')
            .click('@userMenus')
            .waitForElementPresent('@dropDown')

        //The action
        this.api.useXpath()
        this.click('@logout')
        this.api.useCss()

        //The varification
        this.waitForElementNotPresent('@userMenus')
        return this
    },

}
//Page Objects
module.exports = {
    url: "https://alpha.yoodlize.com/",
    commands: [yoodCommands],
    elements: {

        login: 'button[type="submit"]',
        dropDown: '.dropdown-menu',
        password: 'input[name="password"]',
        email: 'input[name="email"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        gender: 'select[name="gender"]',
        month: 'select[name="month"]',
        day: 'select[name="day"]',
        year: 'select[name="year"]',
        location: 'input[name="location"]',
        describe: '[name=info]',
        file: 'input[type="file"]',
        userMenus: '#basic-nav-dropdown',
        Search: '.form-control',
        payEmail: 'input[name="payEmail"]',
        address1: 'input[name="address1"]',
        city: 'input[name="city"]',
        state: 'input[name="state"]',
        zip: 'input[name="zipcode"]',
        defaultPayout: 'span[class="label label-success"]',
        paypal: 'input[value="1"]',

        //selectors for adding an item
        //description
        dTitle: 'input[placeholder=Title]',
        dDescription: 'textarea[placeholder="Enter Description here..."]',

        //pick a category will be click by text

        //address
        streetAddress: 'input[placeholder="Street Address"]',
        optionalAddress: 'input[placeholder="Apt, suite, Bldg, (optional)"]',
        city: 'input[placeholder="City"]',
        state: 'input[placeholder="State"]',
        zipcode: 'input[placeholder="Zipcode"]',

        //price

        pricing: 'input[min="1"]',
        loginText: {
            selector: '(//div[@class="sc-jqCOkK lgUaOg sc-gqjmRU fptSCa"])[3]',
            locateStrategy: 'xpath'
        },
        verifyEmail: {

        selector: '//button[contains(text(), "Verify Email")]',
        locateStrategy: 'xpath'
        },

        //rental rules

        //select by text for drop down
        enterRule: 'select[label="Premade rules"]',
        inputRule: 'input[placeholder="Enter a rule here"]',
        addRule: 'button[class="sc-esjQYD bonOTJ sc-ifAKCX kvYMhQ"]',

        //availability
        //pickDay: '(//div[@class="DayPicker-Day"])[3]', (See clickDay below)

        //photos
        clickPhoto: 'input[type=file]',
        //use cover photo click by text "Use as cover photo"
        deletePhoto: 'div[class="sc-dliRfk eNuPPl sc-bdVaJa iHZvIS"]',
        //review
        acceptItem: {
            selector: '(//ins[@class])[1]',
            locateStrategy: 'xpath'
        },
        termsItem: {
            selector: '(//ins[@class])[2]',
            locateStrategy: 'xpath'
        },
        publishItem: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        viewListing: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        editListingPage: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',



        // buttons
        nextItem: {
            selector: '//button[contains(text(), "Next:")]',
            locateStrategy: 'xpath'
        },
        backItem: 'button[class="sc-esjQYD hqodhR sc-ifAKCX kvYMhQ"]',
        // selectorName: {selector: '', locateStrategy: 'xpath'}
        clickDay: {
            selector: '(//div[@class="DayPicker-Day"])[3]',
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '(//button[@class="btn btn-link"])[2]',
            locateStrategy: 'xpath'
        },
        photoTrash: {
            selector: '(//i)[4]',
            locateStrategy: 'xpath'
        },
        addDocument: {
            selector: '(//button)[7]',
            locateStrategy: 'xpath'
        },
        next: {
            selector: '(//button[@type="submit"])[3]',
            locateStrategy: 'xpath'
        },
        back: {
            selector: '(//button[@type="submit"])[3]',
            locateStrategy: 'xpath'
        },

        payout: {
            selector: '(//a[@class="AccountSettingsSideMenu-sideNavitem-hFcOX"])[1]',
            locateStrategy: 'xpath'
        },

        trustMenu: {
            selector: '(//div[@class="sc-jqCOkK hRBjNq sc-gqjmRU kYEOFd"])[3]',
            locateStrategy: 'xpath'
        },
        photoMenu: {
            selector: '(//div[@class="sc-jqCOkK hRBjNq sc-gqjmRU kYEOFd"])[2]',
            locateStrategy: 'xpath'
        },
    }
}
