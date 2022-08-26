import { openDB } from 'idb';

//--------------- Forms store

const dbPromise = openDB('forms-store', 1, {
    upgrade(db) {
        db.createObjectStore('forms');
    },
});


  
export async function  formsGet(key) {
    return (await dbPromise).get('forms', key);
};
export async function  formsSet(key, val) {
    return (await dbPromise).put('forms', val, key);
};
export async function  formsDel(key) {
    return (await dbPromise).delete('forms', key);
};
export async function  formsClear() {
    return (await dbPromise).clear('forms');
};
export async function  formsKeys() {
    return (await dbPromise).getAllKeys('forms');
};
export async function  formsValues() {
    return (await dbPromise).getAll('forms');
};

//---------------- Users store


const userPromise = openDB('users-store', 1, {
    upgrade(db) {
        db.createObjectStore('users');
    },
});

  
export async function  usersGet(key) {
    return (await userPromise).get('users', key);
};
export async function  usersSet(key, val) {
    return (await userPromise).put('users', val, key);
};
export async function  usersDel(key) {
    return (await userPromise).delete('users', key);
};
export async function  usersClear() {
    return (await userPromise).clear('users');
};
export async function  usersKeys() {
    return (await userPromise).getAllKeys('users');
};
export async function  usersValues() {
    return (await userPromise).getAll('users');
};


  