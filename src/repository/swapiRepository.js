const axios = require('axios');
const config = require('../../config');

const swapiUrl = config.swapiUrl;

const show = async (id) => {
    return await axios.get(swapiUrl + `/planets/${id}`)
    .then(response => {
        return {
            nombre: response.data.name,
            periodo_rotacion: response.data.rotation_period,
            periodo_orbita: response.data.orbital_period,
            diametro: response.data.diameter,
            clima: response.data.climate,
            gravedad: response.data.gravity,
            terreno: response.data.terrain,
            superficie_agua: response.data.surface_water,
            poblacion: response.data.population,
            url: response.data.url,
            residentes: response.data.residents,
            peliculas: response.data.films,
            f_creacion: response.data.created,
            f_edicion: response.data.edited,
        };
    })
    .catch(error => { 
        throw error;
    });
}

module.exports = {
    show,
};