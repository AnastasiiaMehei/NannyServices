// import css from './NanniesPage.module.css'

// import Header from "../../components/Header/Header";

import FilterNannies from "../../components/FilterNannies/FilterNannies";
import Header from "../../components/Header/Header";
import LogInModal from "../../components/LogInModal/LogInModal";
import NannyCard from "../../components/NannyCard/NannyCard";
import css from "./NanniesPage.module.css";

export default function NanniesPage () {
    return (
        <div className={css.wrapper}>
         <div className={css.header}>
         <Header/>
         </div>
       <div className={css.divInfo}>
       <FilterNannies/>
        <div className={css.loadMoreDiv}>
        <NannyCard/>

        <button className={css.loadMoreBtn} type="button">Load more </button>
        </div>
       </div>
       <LogInModal/>
        </div>
    )
}