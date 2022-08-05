const connection = require('../database/connection');

const show = function (id) {
    return new Promise(function (resolve, reject) {
        connection.query(
            "select * from planetas where id = ?",
            [id],
            function (err, result) {
                if (result == undefined) {
                    reject(new Error("Error results is undefined"));
                } else {
                    resolve(result);
                }
            }
        )
    })
}

const showAll = function() {
    return new Promise(function (resolve, reject) {
        connection.query(
            "select * from planetas",
            function (err, result) {
                if (result == undefined) {
                    reject(new Error("Error results is undefined"));
                } else {
                    resolve(result);
                }
            }
        )
    })
}

const save = function(data) {
    return new Promise(function (resolve, reject) {
        connection.query(
            "insert into planetas (nombre, periodo_rotacion, periodo_orbita, diametro, clima, gravedad, terreno, superficie_agua, poblacion, url, f_creacion, f_edicion) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [data.nombre, data.periodo_rotacion, data.periodo_orbita, data.diametro, data.clima, data.gravedad, data.terreno, data.superficie_agua, data.poblacion, data.url, data.f_creacion, data.f_edicion],
            function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    data.id = result.insertId;
                    resolve(data);
                }
            }
        )
    })
}

module.exports = {
    show,
    showAll,
    save
}