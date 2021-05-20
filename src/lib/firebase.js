import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBCNv7xFyofa3lywO1Wb0y2CaWlGiloXBU",
  authDomain: "itss-pj-34a7b.firebaseapp.com",
  projectId: "itss-pj-34a7b",
  storageBucket: "itss-pj-34a7b.appspot.com",
  messagingSenderId: "844419966975",
  appId: "1:844419966975:web:78c37f7ca630a8bde0e9ca"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export const getFirebaseItems = async () => {

  try {

    const data = await db.collection("todos").get();

    const items = data.docs.map(

      (doc) => ({ ...doc.data(), id: doc.id })

    );

    return items;

  } catch (err) {

    return [];

  }

}



export const addFirebaseItem = async (item) => {

  try {

    const data = db.collection("todos");

    await data.add(item);

  } catch (err) {

  }

}



export const updateFirebaseItem = async (item, id) => {

  try {

    const data = db.collection("todos").doc(id);

    await data.update(item);

  } catch (err) {

  }

}



export const clearFirebaseItem = async (item) => {

  const data = db.collection("todos").doc(item.id);

  await data.delete().then(function () {

  }).catch(function (err) {

  });

};