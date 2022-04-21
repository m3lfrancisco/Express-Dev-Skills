const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'JavaScript', done: true},
    {id: 156432, skill: 'jQuery', done: true},
    {id: 137303, skill: 'node.js', done: false},
    {id: 145690, skill: 'Express', done: false},
    {id: 162401, skill: 'Python', done: false},
    {id: 179521, skill: 'React', done: false}
];

module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne  // Add create
};

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};

// Add create function
function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done
    skill.done = false;
    skills.push(skill);
};

// Add delete function
function deleteOne(id) {
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};