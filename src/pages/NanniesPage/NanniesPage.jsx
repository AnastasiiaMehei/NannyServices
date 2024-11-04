// import css from './NanniesPage.module.css'

// import Header from "../../components/Header/Header";

import FilterNannies from "../../components/FilterNannies/FilterNannies";
import NannyCard from "../../components/NannyCard/NannyCard";
import css from "./NanniesPage.module.css";

export default function NanniesPage () {
    return (
        <div className={css.wrapper}>
         <FilterNannies/>
        <div className={css.loadMoreDiv}>
        <NannyCard/>

        <button className={css.loadMoreBtn} type="button">Load more </button>
        </div>
        </div>
    )
}