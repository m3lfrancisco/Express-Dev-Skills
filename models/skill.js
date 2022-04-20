const skills = [
    {id: 1, skill: 'HTML', done: true},
    {id: 2, skill: 'CSS', done: true},
    {id: 3, skill: 'JavaScript', done: true},
    {id: 4, skill: 'jQuery', done: true},
    {id: 5, skill: 'node.js', done: false},
    {id: 6, skill: 'Express', done: false},
    {id: 7, skill: 'Python', done: false},
    {id: 8, skill: 'React', done: false}
];

module.exports = {
    getAll, 
    getOne
};

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};