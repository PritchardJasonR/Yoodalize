module.exports = (client, email, password, first, last, month, day, year, location, describe) => {
    client

        // fill user info to create an account
        
        
        .setValue('@email', email) 
        .setValue('@password', password)
        .setValue('@month', month)
        .setValue('@day', day)
        .setValue('@year', year)
        .setValue('@firstName', first)
        .setValue('@lastName', last)
}