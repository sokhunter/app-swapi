const planetRepository = require('../repository/planetRepository');

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


module.exports = {
    show,
    showAll,
    save
}