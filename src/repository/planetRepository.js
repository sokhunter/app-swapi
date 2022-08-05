const connection = require('../database/connection');

const show = function (id) {
    return new Promise(function (resolve, reject) {
        connection.query(
            "select * from planetas where id = ?",
            [id],
            function (err, rows) {
                if (rows == undefined) {
                    reject(new Error("Error results is undefined"));
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

module.exports = {
    show,
}