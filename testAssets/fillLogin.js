module.exports = (client, email, password) => {
    client

        // fill Login info

       
        .setValue('@email', email)
        .setValue('@password', password)
        .click('@login')


}