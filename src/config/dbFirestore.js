import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { auth, db } from "./firebase";
  
  // Create user document with default data
  export const createDocuments = async (uid) => {
    const path = `users/${uid}`;
    await setDoc(doc(db, path), {}); // Providing an empty object to create the document
  };
  
  // Create a new playlist item
  export const createPlaylist = async (path, { imdbID, title, year, released, language, country, imdbRating, genre }) => {
    await addDoc(collection(db, path), {
      imdbID,
      title,
      year,
      released,
      language,
      country,
      imdbRating,
      genre,
    });
  };
  
  // Update a document in the database
  export const updateDB = async (id, text, path) => {
    await updateDoc(doc(db, path, id), { text });
  };
  
  // Delete a document from the database
  export const deleteDB = async (path, id) => {
    await deleteDoc(doc(db, path, id));
  };
  