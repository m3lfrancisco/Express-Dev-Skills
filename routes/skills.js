var express = require('express');
var router = express.Router();

// Require the controller that exports Skill CRUD functions
let skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET Route /skills
router.get('/', skillsCtrl.index);

// Add GET Route /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// Add proper route for creating data on the server
router.post('/', skillsCtrl.create);

// Add proper route for deleting data
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
