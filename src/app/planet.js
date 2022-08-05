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

module.exports = {
    show,
    showAll,
}