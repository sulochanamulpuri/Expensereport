import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDG7D4yOdaf0vHLB7C1ClyqDsRgIhW1n_M",
    authDomain: "expenseriskg.firebaseapp.com",
    databaseURL: "https://expenseriskg.firebaseio.com",
    projectId: "expenseriskg",
    storageBucket: "expenseriskg.appspot.com",
    messagingSenderId: "69579409281"
};

firebase.initializeApp(config);

const database = firebase.database();

export{firebase,database as default};

/*// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});*/


 /*database.ref('expenses')
   .once('value')
  .then((snapshot) => {
    const expenses = [];

     snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });*/

/* database.ref('expenses').on('value', (snapshot) => {
   const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
   });
  });

 console.log(expenses);
});
*/
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

/*database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})*/

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

/*database.ref().set({
   name: 'Andrew Mead',
   age: 26,
  stressLevel: 6,
   job: {
     title: 'Software developer',
    company: 'Google'
  },   location: {
         city: 'Philadelphia',
     country: 'United States'
  }
 }).then(() => {
  console.log('Data is saved!');
 }).catch((e) => {
   console.log('This failed.', e);
 });

 

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
 });*/

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });*