
import sprite from "../../images/icons-sprite.svg";

import css from './NannyCard.module.css'
export default function NannyCard () {
    return (
        <div className={css.wrapper}>
<div className={css.img}>
    <div className={css.avatar}></div>
</div>
<div className={css.mainInfo}>
    <div className={css.firstLine}>
        <div className={css.nameDiv}>
            <p className={css.nanny}>Nanny</p>
            <p className={css.name}>Name {}</p>
        </div>
        <div className={css.container}>
            <div className={css.info}>
                <div className={css.locationDiv}>
                <svg className={css.iconLocation}>
                <use xlinkHref={`${sprite}#icon-location`}></use>
              </svg>
              <p className={css.location}>Location {}</p>
                </div>
                <div className={css.ratingDiv}>
                <svg className={css.rating}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p className={css.location}>Rating: {}</p>
                </div>
                <div className={css.priceDiv}>
                    <p className={css.priceParagraph}>Price / 1 hour: <span className={css.priceSpan}> {}$</span></p>
                </div>

            </div>
            <div>
            <svg className={css.iconLike}>
                <use xlinkHref={`${sprite}#icon-blackLike`}></use>
              </svg>
            </div>
        </div>

    </div>
    <div className={css.personalInfo}>
<div className={css.personalInfoParagraph}>
    <p>Age:</p>
    <p></p>

</div>
<div className={css.personalInfoParagraph}>
    <p>Experience:</p>
    <p className={css.details}></p>

</div>
<div className={css.personalInfoParagraph}><p>Kids Age:</p>
<p className={css.details}></p>

</div>
<div className={css.personalInfoParagraph}><p>Characters:</p>
<p className={css.details}></p>
</div>
<div className={css.personalInfoParagraph}><p>Education:</p>
<p className={css.details}></p>
</div>
    </div>
    <div className={css.summary}>
        <p>Summary:{}</p>
    </div>
    <div className={css.readMoreBtn}>
        <a href="">Read more</a>
    </div>
</div>

            
        </div>
    )
}