//Object destructuring
const person = {
    name: 'Yasmin',
    age: 22,
    location: {
        city: 'Choloma',
        temp: 43
    }
};

const {name: firstname = 'Anonymous', age} = person;
console.log(`${firstname} is ${age}`);

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, , state] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$1.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);