module.exports = function(sequelize, dataTypes) {
    var Guest = sequelize.define('Guest', {
        fullName: dataTypes.STRING,
        address: dataTypes.STRING,
        city: dataTypes.STRING,
        state: dataTypes.STRING,
        zip: dataTypes.STRING,
        email: dataTypes.STRING,
        status: dataTypes.ENUM('accept', 'decline'),
        guests: dataTypes.INTEGER,
        foodPref: dataTypes.ENUM('meat', 'vege'),
    });

    return Guest;
}