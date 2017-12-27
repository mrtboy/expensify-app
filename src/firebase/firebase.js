import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider,database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=> {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot)=> {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });


//Child Removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// });

// //Child Changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child Added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: "Des",
//   note: "Notes",
//   amount: 23232,
//   createdAt: 32323
// });



// const onValueChange = (snapshot) => {
//   console.log(snapshot.val());
// };
// database.ref().on('value', onValueChange);

// setTimeout(() => {
//   database.ref('age').set(44);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value',onValueChange);
// }, 8000);

// setTimeout(() => {
//   database.ref('age').set(89);
// }, 9000);


// database.ref('location')
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e)=>{
//     console.log(e.message);
//   });


// database.ref().set({
//   name: 'Reza Taleghani',
//   age: 31,
//   isSingle: false,
//   stressLevel: 9,
//   job: {
//     title: 'Software Engineering',
//     company: 'Google'
//   },
//   location: {
//     city: "Kiel",
//     Country: "Germany"
//   }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((e) => {
//   console.log("this is failed", e);
// });

// database.ref('isSingle').set(null);

// database.ref().update({
//   stressLevel: 10,
//   'job/company': 'Amazon',
//   'location/city': "Hamburg"
// });

// database.ref()
// .remove()
// .then(()=>{
//   console.log("Removed");
// })
// .catch((e)=>{
//   console.log('Not Removed', e.message);
// });