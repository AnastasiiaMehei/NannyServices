// import css from './NanniesPage.module.css'

// import Header from "../../components/Header/Header";
import sprite from "../../images/icons-sprite.svg";

import css from "./HomePage.module.css";

export default function NanniesPage () {
    return (
        <div className={css.wrapper}>
            {/* <div  className={css.header}>
                <Header/>
            </div> */}
<div>
    <p>Filters</p>
    <button type="button">A to Z</button>
    <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-down`}></use>
              </svg>
</div>
        </div>
    )
}