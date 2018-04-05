//
//OBJECT DESTRUCTURING
//

// console.log('destructuring');
//
// const person = {
//     name: 'Tomas',
//     age: 30,
//     location: {
//         city: 'Prague',
//         temp: 54
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}`);
//
// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: "Ryan Holiday",
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {title, author} = book;
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


//
//ARRAY DESTRUCTURING
//
//
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [, city, state = 'New York'] = address;
//
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , priceMedium] = item;

console.log(`A medium ${name} costs ${priceMedium}`);