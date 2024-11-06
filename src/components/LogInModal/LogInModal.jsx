import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';
import { loginUser } from '../../services/authService'; 


import sprite from "../../images/icons-sprite.svg";
import css from "./LogInModal.module.css";

const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
export default function LogInModal ({ onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      const navigate = useNavigate();
      const onSubmit = async (data) => {
        try {
          await loginUser(data.email, data.password);
          onClose();
          navigate('/nannies');
        } catch (error) {
          console.error("Login failed:", error);
        }
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
                <p className={css.registrationParagraph}>Log In</p>
                <p className={css.registrationParagraphDescription}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
            </div>
            <div >
            <form onSubmit={handleSubmit(onSubmit)} className={css.form} >
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
          <button className={css.btn} type="submit">Log in</button>
        </div>
        </div>
        </div>
    )
}