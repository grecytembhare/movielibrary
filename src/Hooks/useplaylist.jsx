// src/usePlaylist.js
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { createDocuments, createPlaylist } from '@/config/dbFirestore';
import { auth, db } from '@/config/firebase';

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const userId = auth.currentUser;

  useEffect(() => {
    if (userId) {
      createDocuments(userId.uid);
    }
  }, [userId]);

  const path = userId ? `/users/${userId.uid}/playlist` : null;

  useEffect(() => {
    if (path) {
      const unsubscribe = onSnapshot(collection(db, path), (snapshot) => {
        const playlistData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: { ...doc.data() },
        }));
        setPlaylist(playlistData);
      });

      return () => unsubscribe();
    }
  }, [path]);

  const addToPlaylist = async (imdbID, title, year, released, language, country, imdbRating, genre) => {
    const playlistData = { imdbID, title, year, released, language, country, imdbRating, genre };
    console.log(playlistData);

    if (path) {
      const newDocRef = await createPlaylist(path, playlistData);
      setPlaylist([...playlist, { id: imdbID, data: playlistData }]);
    }
  };

  return { playlist, addToPlaylist };
};

export default usePlaylist;
