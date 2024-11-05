
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import sprite from "../../images/icons-sprite.svg";
import css from "./RegistrationModal.module.css";

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

export default function RegistrationModal () {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => {
        console.log(data);
        // Виклик функції реєстрації або логінізації
      };
    return (
        <div className={css.wrapper}>
        <div className={css.closeBtn}>
        <svg className={css.iconClose}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
        </div>
        <div className={css.mainInfo}>
            <div className={css.registrationParagraphDiv}>
                <p className={css.registrationParagraph}>Registration</p>
                <p className={css.registrationParagraphDescription}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
            </div>
            <div >
            <form onSubmit={handleSubmit(onSubmit)} className={css.form} >
        <div >
          <input 
            type="text"
            placeholder="Name"
            {...register('name')}
            className={css.inputs}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={css.inputs}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className={`${css.inputs} ${css.eye}`}
          />
               <svg className={css.iconEyeOff}>
                <use xlinkHref={`${sprite}#icon-eye-off`}></use>
              </svg>
          {errors.password && <p className={css.error}>{errors.password.message}</p>}
        </div>
      
      </form>
            </div>
            <div className={css.btnDiv}>
          <button className={css.btn} type="submit">Sign Up</button>
        </div>
        </div>
        </div>
    )
}