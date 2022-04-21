// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, // Add newSkill
    create, // Add create
    delete: deleteSkill // Add deleteSkill
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time // add this line
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
};

// Add newSkill function
function newSkill(req, res) {
    res.render('skills/new');
};

// Add create function
function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
};

// Add delete function
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};