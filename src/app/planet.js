const planetRepository = require('../repository/planetRepository');
const swapiRepository = require('../repository/swapiRepository');

const show = (req, res) => {
    let id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número" });
    }
    planetRepository.show(id)
    .then(response => {
        res.json(response);
    })
}

const showAll = (req, res) => {
    planetRepository.showAll()
    .then(response => {
        res.json(response);
    });
};

const save = (req, res) => {
    if (!req.body.hasOwnProperty('nombre')) {
        return res.status(400).json({ error: "El campo nombre es requerido"});
    }
    if (req.body.nombre == '') {
        return res.status(400).json({ error: "El campo nombre es requerido"});
    }
    
    req.body.f_creacion = new Date().toISOString();
    req.body.f_edicion = new Date().toISOString();

    planetRepository.save(req.body)
    .then(response => {
        res.json(response);
    });
};

const showSwapi = (req, res) => {
    let id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número" });
    }
    swapiRepository.show(id)
        .then(response => {
            res.json(response);
        }
    );

};

const getAndSave = (req, res) => {
    let id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número" });
    }
    swapiRepository.show(id)
        .then(response => {
            planetRepository.save(response)
            .then(rsp => {
                res.json(rsp);
            })
        }
    );
};


module.exports = {
    show,
    showAll,
    save,
    showSwapi,
    getAndSave,
}