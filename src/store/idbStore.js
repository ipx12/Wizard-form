import { openDB } from 'idb';


const dbPromise = openDB('forms-store', 1, {
    upgrade(db) {
        db.createObjectStore('forms');
    },
});
  
export async function get(key) {
    return (await dbPromise).get('forms', key);
};
export async function set(key, val) {
    return (await dbPromise).put('forms', val, key);
};
export async function del(key) {
    return (await dbPromise).delete('forms', key);
};
export async function clear() {
    return (await dbPromise).clear('forms');
};
export async function keys() {
    return (await dbPromise).getAllKeys('forms');
};
  