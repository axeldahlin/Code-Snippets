const animals = ['Bunny', 'Bear', 'Mouse', 'Rabbit', 'Owl', 'Pig'];

const FormalAnimals = animals.map(function(animal) {
    if(Math.random() * 2 > 1) {
        return 'Mr. ' + animal;
    } else {
        return 'Mrs. ' + animal;
    }
});

console.log(FormalAnimals);

////////////////////////////////////////////////////////

const persons = [
    {firstname: 'Elsie', lastname: 'Johnsson'},
    {firstname: 'Johny', lastname: 'Dahlin'},
    {firstname: 'Johanna', lastname: 'Smith'}
    ];

const bothNames = persons.map(function (person) {
    return `${person.firstname} ${person.lastname}`
});

console.log(bothNames);

