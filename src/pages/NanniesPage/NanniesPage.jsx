import FilterNannies from "../../components/FilterNannies/FilterNannies";
import Header from "../../components/Header/Header";
import NannyCard from "../../components/NannyCard/NannyCard";
import  { useState, useEffect } from 'react';
import {db} from '../../services/firebase'
import { ref, get, child, onValue } from "firebase/database"; 


import css from "./NanniesPage.module.css";

export default function NanniesPage () {
    const [nannies, setNannies] = useState([]);
    const [visibleNannyCard, setVisibleNannyCard] = useState(3);

    const handleLoadMore = () => {
      setVisibleNannyCard(prev => prev + 3);
    };
  

  useEffect(() => {


   
      const dbRef = ref(db);

      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          const data = snapshot.val();
          console.log("Fetched data:", data); 
          if (data) {
            const nanniesList = Object.values(data);
            setNannies(nanniesList);
          } else {
            setNannies([]);
          }
        },
        (error) => {
          console.error("Error fetching nannies:", error);
          setError(error);
        }
      );
    
    return () => unsubscribe();
  }, []);



    return (
        <div className={css.wrapper}>
         <div className={css.header}>
         <Header/>
         </div>
       <div className={css.divInfo}>
       <FilterNannies/>
        <div className={css.loadMoreDiv}>
        {nannies.slice(0, visibleNannyCard).map((nanny, index) => (
          <NannyCard key={nanny.id || index} nanny={nanny}/>
        ))}
{visibleNannyCard < nannies.length && (        <button className={css.loadMoreBtn} type="button" onClick={handleLoadMore}>Load more </button>
)}
        </div>
       </div>
        </div>
    )
}