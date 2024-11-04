import sprite from "../../images/icons-sprite.svg";

import css from './FilterNannies.module.css'
export default function FilterNannies () {
    return (
        <div className={css.wrapper}>
 <p className={css.paragraph}>Filters</p>
    <div className={css.paragraph}>
    <div className={css.buttonDiv} type="button">A to Z <svg className={css.icon}>
                <use xlinkHref={`${sprite}#icon-down`}></use>
              </svg></div>
<div className={css.container}>
    <p className={css.containerParagraph}>A to Z</p>
    <p className={css.containerParagraph}>Z to A</p>
    <p className={css.containerParagraph}>Less than 10$</p>
    <p className={css.containerParagraph}>Greater than 10$</p>
    <p className={css.containerParagraph}>Popular</p>
    <p className={css.containerParagraph}>Not popular</p>
    <p className={css.containerParagraph}>Show all</p>

</div>
    </div>
            
        </div>
    )
}