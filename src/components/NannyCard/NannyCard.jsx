
import sprite from "../../images/icons-sprite.svg";

import css from './NannyCard.module.css'
export default function NannyCard ({
    name,
    avatar_url,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating
  }) {
    return (
        <div className={css.wrapper}>
<div className={css.img}>
    <div className={css.avatar}></div>
</div>
<div className={css.mainInfo}>
    <div className={css.firstLine}>
        <div className={css.nameDiv}>
            <p className={css.nanny}>Nanny</p>
            <p className={css.name}>Name {name}</p>
        </div>
        <div className={css.container}>
            <div className={css.info}>
                <div className={css.locationDiv}>
                <svg className={css.iconLocation}>
                <use xlinkHref={`${sprite}#icon-location`}></use>
              </svg>
              <p className={css.location}>Location {location}</p>
                </div>
                <div className={css.ratingDiv}>
                <svg className={css.rating}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p className={css.location}>Rating: {rating}</p>
                </div>
                <div className={css.priceDiv}>
                    <p className={css.priceParagraph}>Price / 1 hour: <span className={css.priceSpan}> {price_per_hour}$</span></p>
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
    <p>{birthday}</p>

</div>
<div className={css.personalInfoParagraph}>
    <p>Experience:years</p>
    <p className={css.details}>{experience}</p>

</div>
<div className={css.personalInfoParagraph}><p>Kids Age:</p>
<p className={css.details}>{kids_age}</p>

</div>
<div className={css.personalInfoParagraph}><p>Characters:</p>
<p className={css.details}>{characters}</p>
</div>
<div className={css.personalInfoParagraph}><p>Education:</p>
<p className={css.details}>{education}</p>
</div>
    </div>
    <div className={css.summary}>
        <p>Summary:{about}</p>
    </div>
    <div className={css.readMoreBtn}>
        <a href="">Read more</a>
    </div>
</div>

            
        </div>
    )
}