import sprite from "../../images/icons-sprite.svg";

import css from "./AppointmantModal.module.css";

export function AppointmantModal({avatar_url, name}){
  return (
    <div  className={css.backdrop}>
    <div className={css.container}>
    <svg className={css.iconClose}>
                <use xlinkHref={`${sprite}#icon-close`}></use>

              </svg>
   <div className={css.titleDiv}>
    <p className={css.mainTitle}>Make an appointment with a babysitter</p>
   <p className={css.summary}>Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
   </div>
   <div className={css.personalInformation}>
    <div><div
          className={css.avatar}
        >
            <p>photo</p></div></div>
    <div className={css.yourNanny}>
        <p className={css.yourNannyTitle}>Your nanny</p>
        <p className={css.yourNannyName}>Name{name}</p>
    </div>
   </div>
   <div className={css.form}>
<div className={css.someInfoDiv} >
    <input className={css.someInfo} type="text" placeholder="Address"/>
    <input className={css.someInfo} type="text" placeholder="+380"/>
    <input className={css.someInfo} type="text" placeholder="Child's age"/>
<div>
<input className={`${css.someInfo} ${css.clock}`} type="text" placeholder="+00:00"/>
<svg className={css.iconClock}>
                <use xlinkHref={`${sprite}#icon-clock`}></use>

              </svg>
</div>
</div>
   </div>
   <div>
   <input className={css.parents} type="text" placeholder="Father's or mother's name" />

   </div>
   <div>
    <input className={css.comment} type="text" name="" id=""  placeholder="Comment"/>
   </div>
    </div>   
     </div>

  );
};