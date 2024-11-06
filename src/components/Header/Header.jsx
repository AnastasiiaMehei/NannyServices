import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import RegistrationModal from '../RegistrationModal/RegistrationModal'
import LogInModal from '../LogInModal/LogInModal'
import css from './Header.module.css'
export default function Header () {
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  
    const handleOpenRegistrationModal = () => {
      setIsRegistrationModalOpen(true);
    };
  
    const handleCloseRegistrationModal = () => {
      setIsRegistrationModalOpen(false);
    };
  
    const handleOpenLogInModal = () => {
      setIsLogInModalOpen(true);
    };
  
    const handleCloseLogInModal = () => {
      setIsLogInModalOpen(false);
    };
    const handleLogout = async () => {
        try {
          await logoutUser();
          console.log("User logged out");
        } catch (error) {
          console.error("Logout failed:", error);
        }
      };
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
            <button type='button' className={css.logIn} onClick={handleOpenLogInModal}>
            Log In
          </button>
          <button type='button' className={css.registration} onClick={handleOpenRegistrationModal}>
            Registration
          </button>
          <button type='button' className={css.logIn} onClick={handleOpenRegistrationModal}>
            Log out
          </button>
            </div>
            </div>
            {isRegistrationModalOpen && (
        <RegistrationModal onClose={handleCloseRegistrationModal} />
      )}

      {isLogInModalOpen && (
        <LogInModal onClose={handleCloseLogInModal} />
      )}
        </div>
    )
}