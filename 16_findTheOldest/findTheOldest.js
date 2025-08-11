const findTheOldest = function(people) {
    for (person of people) {
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let currentDate = new Date().getFullYear();
            person.age = currentDate - person.yearOfBirth;
        }
    }
    people.sort((a, b) => {
        if (a.age > b.age) {
            return -1;
        } else return 1;
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
