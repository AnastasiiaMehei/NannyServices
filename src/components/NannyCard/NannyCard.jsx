import { useEffect, useState } from "react";
import sprite from "../../images/icons-sprite.svg";
import { getFavorites, addToFavorites, removeFromFavorites } from "../../services/favoritesService";
import { useAuth } from "../../services/AuthContext";
import { toast } from 'react-toastify';

import css from "./NannyCard.module.css";
import { AppointmantModal } from "../AppointmantModal/AppointmantModal";

export default function NannyCard({ nanny = {}, onToggleFavorite }) {
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
    id
  } = nanny;

  const { user } = useAuth();
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (user && nanny.id) {
        try {
          console.log('Checking favorites for user:', user.uid);
          const favorites = await getFavorites(user.uid);
          console.log('Favorites:', favorites);
          setIsFavorite(!!favorites[nanny.id]);
        } catch (error) {
          console.error("Error checking favorite status:", error);
        }
      }
    };

    checkFavoriteStatus();
  }, [user, nanny.id]);

  const handleToggleFavorite = async () => {
    if (!user) {
      toast.error("Please log in to add favorites");
      return;
    }

    try {
      if (isFavorite) {
        await removeFromFavorites(user.uid, nanny.id);
        setIsFavorite(false);
        toast.success("Removed from favorites");
      } else {
        await addToFavorites(user.uid, nanny.id);
        setIsFavorite(true);
        toast.success("Added to favorites");
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Error updating favorites");
    }
  };


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
// appointmant modal
const handleAppointmentClick = () => {
  if (!user) {
    toast.error("Please log in to make an appointment");
    return;
  }
  setShowAppointmentModal(true);
};

const handleCloseModal = () => {
  setShowAppointmentModal(false);
};

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
            <div onClick={handleToggleFavorite}>
              <svg className={css.iconLike}>
                <use xlinkHref={`${sprite}#icon-${isFavorite ? 'redLike' : 'blackLike'}`}></use>

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
    const capitalizedCharacter = character.charAt(0).toUpperCase() + character.slice(1);
    return (
      <span key={index}>{`${capitalizedCharacter}, `}</span>
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
                        <p>{rating}</p>
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
              <button className={css.appointmentBtn} type="submit" onClick={handleAppointmentClick}>
                Make an appointment
              </button>
            </div>
            {showAppointmentModal && (
        <>
          <AppointmantModal 
            onClose={handleCloseModal}
            nannyName={name}
            nannyAvatar={avatar_url}
          />
        </>
      )}
          </div>
        )}
      </div>
    </div>
  );
}