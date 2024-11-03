import { NavLink } from 'react-router-dom';

import css from './Header.module.css'
export default function Header () {
    return (
        <div className={css.wrapper}>
            <div>
            <a className={css.logo}>Nanny.Services</a>
            </div>
            <div className={css.navigationDiv}>
            <div className={css.navigation}>
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <NavLink to={'/nannies'}>
                    Nannies
                </NavLink>
            </div>
            <div className={css.btn}>
                <button type='button' className={css.logIn}> Log In
                    </button>
                    <button type='button' className={css.registration} > Registration</button>
            </div>
            </div>
            
        </div>
    )
}