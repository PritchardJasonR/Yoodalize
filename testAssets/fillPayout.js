module.exports = (client, address, city, state, zip) => {
    //Fill out Payment method address fields

    client

        .setValue('@address1', address)
        .setValue('@city', city)
        .setValue('@state', state)
        .setValue('@zip', zip)
}