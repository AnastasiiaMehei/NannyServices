import { useEffect, useState } from "react";
import { useAuth } from "../../services/AuthContext";
import { toast } from "react-toastify";

import sprite from "../../images/icons-sprite.svg";

import css from "./AppointmantModal.module.css";

export function AppointmantModal({ onClose, nannyName, nannyAvatar  }) {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
      address: '',
      phone: '',
      childAge: '',
      time: '',
      parentName: '',
      comment: ''
    });
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.code === "Escape") {
          onClose();
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
  
    const handleBackdropClick = (e) => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {

        onClose();
        toast.success('Appointment scheduled successfully!');
      } catch (error) {
        console.error('Error scheduling appointment:', error);
        toast.error('Failed to schedule appointment');
      }
    };
  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>

      <div className={css.container}>
        <svg className={css.iconClose} onClick={onClose}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
        <div className={css.titleDiv}>
          <p className={css.mainTitle}>Make an appointment with a babysitter</p>
          <p className={css.summary}>
            Arranging a meeting with a caregiver for your child is the first
            step to creating a safe and comfortable environment. Fill out the
            form below so we can match you with the perfect care partner.
          </p>
        </div>
        <div className={css.personalInformation}>
          <div>
          {nannyAvatar && (
              <img 
                src={nannyAvatar} 
                alt={nannyName} 
                className={css.avatar}
              />
            )}
          </div>
          <div className={css.yourNanny}>
            <p className={css.yourNannyTitle}>Your nanny</p>
            <p className={css.nannyName}>{nannyName}</p>
            </div>
        </div>
        <form className={css.form}  onSubmit={handleSubmit}>
          <div className={css.someInfoDiv}>
            <input
              className={css.someInfo}
              type="text"
              name="address"
              placeholder="Address"
              required
            />
            <input
              className={css.someInfo}
              type="tel"
              name="phone"
              placeholder="+380"
                required
            />
            <input
              className={css.someInfo}
              type="text"
              placeholder="Child's age"
            />
            <div>
              <input
                className={`${css.someInfo} ${css.clock}`}
               type="time"
                  name="time"
                required
              />
          
            </div>
            <input
            className={css.parents}
            type="text"
              name="parentName"
              placeholder="Father's or mother's name"
              required
          />
             <input
            className={css.comment}
            name="comment"
            id=""
            placeholder="Comment"

            />
          </div>
        </form>
        <button className={css.btn} type="submit">Send</button>

      </div>
    </div>
  );
}

