import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expense').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// abase.ref('expense').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//        const expenses = [];
//        snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//        });
//
//        console.log(expenses);
//     });


// database.ref('notes/-L9lM1h2deKkJIEandXo').update({
//     body: 'Buy food'
// });
//
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Bought groceries with credit cart',
//     amount: 109500,
//     createdAt: 13451346
// });
//
// database.ref('expenses').push({
//         description: 'Phone bill',
//         note: '',
//         amount: 5900,
//         createdAt: 512345
// });
//
// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 9475123
// });



// database.ref('notes').push({ //Firebase automatically creates a new property on our ref
//     title: 'Course topics',
//     body: 'React native, Angular, Python'
// });

// const notes =[{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes); //cannot work, Firebase does not support arrays -> get converted to object to object-like structures

//Promises can be run only once (resolved or rejected
// const valueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });
//
// setTimeout(() => {
//     database.ref().off(valueChange); //unsubscribe
// }, 3000);

//
// const valueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// });
//
// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

//
// database.ref().set({
//     name: 'Tomas Nemecek',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Prague",
//         country: "Czechia"
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed', error)
// });

// database.ref().set(null); //equivalent to remove

// database.ref().update({ //updated multiple things at once, objects need to be passed
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//     console.log('On remove succeeded')
// }).catch((error) => {
//     console.log('Remove is Single failed', error);
// });

