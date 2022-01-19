import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const database = getDatabase();

export { database as default };
/* const database = ref(db, 'expenses');

onChildChanged(ref(db, 'expenses'), (DataSnapshot) => {
    console.log(DataSnapshot.val());
});

onChildRemoved(database, (DataSnapshot) => {
    console.log(DataSnapshot.key, DataSnapshot.val()); 
});

onChildAdded(database, (DataSnapshot) => {
    console.log(DataSnapshot.key, DataSnapshot.val()); 
}); */
/* get(ref(db, 'expenses')).then((snapshot) => {
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
/* onValue(ref(db, 'expenses'), (snapshot) => {
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
/* const expenses = push(ref(db, 'expenses'), 
    {
        description: 'Water bill',
        note: 'second note',
        amount: 450,
        createdAt: 10000
    }
).key; */

//remove(ref(db, '-MtGCbNZP0lkIHnS96Zw'));

/* const newPost = push(ref(db), {
    title: 'Course topics',
    body: 'React native, Angular, Python'
});
 */

/* onValue(ref(db), (dataSnapshot) => {
    const val = dataSnapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}); */
/* get(ref(db)).then((dataSnapshot) => {
    console.log(dataSnapshot.val());
}).catch((error) => {
    console.log('No data available', error);
}); */
/* set(ref(db), { 
    name: 'Andrew',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});
 */
/* remove(ref(db))
    .then(() => {
        console.log('Data was removed');
    }).catch((e) => {
        console.log('Did not remove data', e);
    }); */

//set(ref(db), null); 

/* update(ref(db), {
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
 */

/* push(ref(db, 'expenses'), 
    {
        description: 'Water bill',
        note: 'second note',
        amount: 450,
        createdAt: 10000
    }
);
 */