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

