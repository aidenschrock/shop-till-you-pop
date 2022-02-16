import { useState, useEffect, createContext, useContext } from "react";
import { createFirebaseApp } from "../services/firebase";
import { getFirestore } from "firebase/firestore/lite";

export const FirestoreContext = createContext();

export default function FirestoreContextComp({ children }) {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const app = createFirebaseApp();
    const db = getFirestore(app);
    setDb(db);
  }, []);

  return (
    <FirestoreContext.Provider value={{ db, setDb }}>
      {children}
    </FirestoreContext.Provider>
  );
}

export const useFirestore = () => useContext(FirestoreContext);
