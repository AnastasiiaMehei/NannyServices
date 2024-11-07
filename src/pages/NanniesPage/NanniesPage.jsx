// import css from './NanniesPage.module.css'

// import Header from "../../components/Header/Header";

import FilterNannies from "../../components/FilterNannies/FilterNannies";
import Header from "../../components/Header/Header";
import NannyCard from "../../components/NannyCard/NannyCard";
import  { useState, useEffect } from 'react';
import {db} from '../../services/firebase'
import { ref, get, child } from "firebase/database"; 


import css from "./NanniesPage.module.css";

export default function NanniesPage () {
    const [nannies, setNannies] = useState([]);

  useEffect(() => {
    const fetchNannies = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, 'nannies'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Data fetched:", data); // Додайте це для перевірки

          const nanniesArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setNannies(nanniesArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNannies();
  }, []);
    return (
        <div className={css.wrapper}>
         <div className={css.header}>
         <Header/>
         </div>
       <div className={css.divInfo}>
       <FilterNannies/>
        <div className={css.loadMoreDiv}>
        {nannies.map(nanny => (
          <NannyCard key={nanny.id} {...nanny} />
        ))}

        <button className={css.loadMoreBtn} type="button">Load more </button>
        </div>
       </div>
        </div>
    )
}