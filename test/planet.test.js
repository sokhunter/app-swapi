const app = require('../src/index');
const request = require('supertest');

describe('show a planet from database - GET/planet/show-from-database/:id', () => {

    describe('given a valid id', () => {
        test('should respond with a 200 status code', async () => {
            const res = await request(app).get('/planet/show-from-database/1').send();
            expect(res.statusCode).toBe(200);
        })
        
        test('should respond with an array', async () => {
            const res = await request(app).get('/planet/show-from-database/1').send();
            expect(res.body).toBeInstanceOf(Array);
        })
    })

    describe('given an invalid id', () => {
        test('should respond with a 400 status code', async () => {
            const res = await request(app).get('/planet/show-from-database/stringId').send();
            expect(res.statusCode).toBe(400);
        })
    })

})

describe('show all planets from database - GET/planet/show-all-from-database', () => {
    test('should respond with a 200 status code', async () => {
        const res = await request(app).get('/planet/show-all-from-database').send();
        expect(res.statusCode).toBe(200);
    })

    test('should respond with an array', async () => {
        const res = await request(app).get('/planet/show-all-from-database').send();
        expect(res.body).toBeInstanceOf(Array);
    })
})

describe('save a planet - POST/planet/save-to-database', () => {
    describe('given all the fields', () => {
        const newPlanet = {
            nombre: "Tierra",
            diametro: "12742",
            periodo_rotacion: "34",
            periodo_orbita: "365",
            clima: "temperate",
            gravedad: "1",
            terreno: "grasslands, mountains",
            superficie_agua: "70",
            poblacion: "7753000",
            url: "https://es.wikipedia.org/wiki/Tierra"
        }

        test('should respond with a 200 status code', async () => {
            const res = await request(app).post('/planet/save-to-database').send(newPlanet);
            expect(res.statusCode).toBe(200);
        })

        test('should have a content-type: application/json in header', async () => {
            const res = await request(app).post('/planet/save-to-database').send(newPlanet);
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"));
        })

        test('should response with a planet ID', async () => {
            const res = await request(app).post('/planet/save-to-database').send(newPlanet);
            expect(res.body.id).toBeDefined();
        })
    })

    describe('when the name is missing', () => {
        test('should respond with a 400 status code', async () => {
            const fields = [
                {},
                {
                    nombre: ''
                },
                {
                    url: 'https://es.wikipedia.org/wiki/Tierra'
                },
                {
                    nombre: '',
                    periodo_rotacion: "34",
                    periodo_orbita: "365",
                    diametro: "12742",
                    clima: "temperate",
                    gravedad: "1",
                    terreno: "grasslands, mountains",
                    superficie_agua: "70",
                    poblacion: "7753000",
                    url: "https://es.wikipedia.org/wiki/Tierra"
                }
            ]
            for (const field of fields) {
                const res = await request(app).post('/planet/save-to-database').send(field);
                expect(res.status).toBe(400);
            }
        })
    })
})

// describe('get a planet from swapi - GET/planet/show-from-swapi/:id', () => {
//     describe('given a valid id', () => {
//         test('should respond with a 200 status code', async () => {
//             const res = await request(app).get('/planet/show-from-swapi/1').send();
//             expect(res.statusCode).toBe(200);
//         });

//         test('should respond with an array', async () => {
//             const res = await request(app).get('/planet/show-from-swapi/1').send();
//             expect(res.body).toBeInstanceOf(Object);
//         })
//     })

//     describe('given an invalid id', () => {
//         test('should respond with a 400 status code', async () => {
//             const res = await request(app).get(`/planet/show-from-swapi/stringID`);
//             expect(res.status).toBe(400);
//         })
//     })
// })

// describe('get a planet from swapi and save it in the database - GET/planet/get-from-swapi-save-to-database/:id', () => {
//     describe('given a valid id', () => {
//         test('should respond with a 200 status code', async () => {
//             const res = await request(app).get('/planet/get-from-swapi-save-to-database/1').send();
//             expect(res.statusCode).toBe(200);
//         });  
//     })

//     describe('given an invalid id', () => {
//         test('should respond with a 400 status code', async () => {
//             const res = await request(app).get(`/planet/get-from-swapi-save-to-database/stringID`);
//             expect(res.statusCode).toBe(400);
//         });
//     })
// })
