module.exports = (client, first, last, gender, month, day, year, location, describe) => {
    client

        // fill user info to be edited
        
        .setValue('@firstName', first)
        .setValue('@lastName', last)
        .setValue('@gender', gender)
        .setValue('@month', month)
        .setValue('@day', day)
        .setValue('@year', year)
        .setValue('@location', location)
        .setValue('@describe', describe)

}