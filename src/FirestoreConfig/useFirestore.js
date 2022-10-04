import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useFirebese } from "./useFirebase";


const useFirestore = (dbCollection) => {
  const db = useFirebese()
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let data = [];
      setLoading(true);
      const response = await getDocs(collection(db, dbCollection));
      response.forEach((doc) => {
        const data2 = {id: doc.id, ...doc.data()}
        data.push(data2);
      })
      setDocuments(data);
      setLoading(false);
    }
    fetchData();
  }, [dbCollection, db])

  return [documents, loading];
}

export { useFirestore  }