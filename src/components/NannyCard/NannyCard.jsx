import { useState } from "react";
import sprite from "../../images/icons-sprite.svg";

import css from "./NannyCard.module.css";

export default function NannyCard({ nanny = {} }) {
  const {
    name,
    avatar_url,
    birthday,
    experience,
    reviews = [],
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = nanny;

  const [showReviews, setShowReviews] = useState(false);

  const handleReadMoreClick = () => {
    setShowReviews(true);
  };
  // Функція для обчислення віку
  function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Якщо місяць поточний менший за місяць народження або
    // якщо місяць поточний такий самий, але день поточний менший за день народження,
    // то зменшуємо вік на 1
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  const age = calculateAge(birthday);

  return (
    <div className={css.wrapper}>
      <div className={css.img}>
        <div
          className={css.avatar}
          style={{ backgroundImage: `url(${avatar_url})` }}
        ></div>
      </div>
      <div className={css.mainInfo}>
        <div className={css.firstLine}>
          <div className={css.nameDiv}>
            <p className={css.nanny}>Nanny</p>
            <p className={css.name}>{name}</p>
          </div>
          <div className={css.container}>
            <div className={css.info}>
              <div className={css.locationDiv}>
                <svg className={css.iconLocation}>
                  <use xlinkHref={`${sprite}#icon-location`}></use>
                </svg>
                <p className={css.location}>{location}</p>
              </div>
              <div className={css.ratingDiv}>
                <svg className={css.rating}>
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <p className={css.location}>Rating: {rating}</p>
              </div>
              <div className={css.priceDiv}>
                <p className={css.priceParagraph}>
                  Price / 1 hour:{" "}
                  <span className={css.priceSpan}> {price_per_hour}$</span>
                </p>
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
            <p className={`${css.details} ${css.age}`}>{age}</p>
          </div>
          <div className={css.personalInfoParagraph}>
            <p>Experience:</p>
            <p className={css.details}>{experience}</p>
          </div>
          <div className={css.personalInfoParagraph}>
            <p>Kids Age:</p>
            <p className={css.details}>{kids_age}</p>
          </div>
          <div className={css.personalInfoParagraph}>
            <p>Characters:</p>
            {/* <p className={css.details}>{characters} </p> */}
            <div className={css.details}>
              {characters.map((character, index) => {
                return (
                  <span key={index}>{`${character.toUpperCase(0, 0)}, `}</span>
                );
              })}
            </div>
          </div>
          <div className={css.personalInfoParagraph}>
            <p>Education:</p>
            <p className={css.details}>{education}</p>
          </div>
        </div>
        <div className={css.summary}>
          <p>{about}</p>
        </div>
        {!showReviews && (
          <div className={css.readMoreBtnDiv}>
            <button className={css.readMoreBtn} onClick={handleReadMoreClick}>
              Read more
            </button>
          </div>
        )}
        {showReviews && (
          <div className={css.reviews}>
            {reviews.map((review, index) => {
              const { reviewer, rating, comment } = review || {};
              return (
                <div key={index} className={css.review}>
                  <div className={css.reviewDiv}>
                    <div className={css.reviewAvatar}>
                      <p className={css.reviewAvatarName}>
                        {" "}
                        {reviewer ? reviewer.charAt(0) : ""}
                        {reviewer ? reviewer.slice(0, 0) : ""}
                      </p>
                    </div>
                    <div className={css.nameReviewer}>
                      <div>{reviewer}</div>
                      <div className={css.ratingDivReview}>
                        <svg className={css.rating}>
                          <use xlinkHref={`${sprite}#icon-star`}></use>
                        </svg>
                        <p>{rating}.0</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className={css.reviewComment}>{comment}</p>
                  </div>
                </div>
              );
            })}
            <div>
              <button className={css.appointmentBtn} type="submit">
                Make an appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
