import { NavLink, useLocation } from "react-router-dom";
import { auth } from "../../services/firebase"; 
import { logoutUser } from '../../services/authService'; // Імпортуйте logoutUser з authService.js
import { useEffect, useState } from "react";
import UserMenu from "../../components/UserMenu/UserMenu.jsx";
import { AuthNav } from "../../components/AuthNav/AuthNav.jsx";
import LogInModal from "../../components/LogInModal/LogInModal";
import RegistrationModal from "../../components/RegistrationModal/RegistrationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sprite from "../../images/icons-sprite.svg";

import css from "./Header.module.css";
import ThemeButton from "../ThemeButton/ThemeButton.jsx";
export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
const location = useLocation();
const isActive = location.pathname === '/nannies';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Successfully logged out");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const handleLoginSuccess = () => {
    setIsLogInModalOpen(false);
    toast.success("Successfully logged in");
  };

  const handleRegistrationSuccess = () => {
    setIsRegistrationModalOpen(false);
    toast.success("Successfully registered");
  };

  const handleLoginError = (error) => {
    toast.error(`Login failed: ${error.message}`);
  };

  const handleRegistrationError = (error) => {
    toast.error(`Registration failed: ${error.message}`);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.themeButton}>
      <ThemeButton/>
        <a className={css.logo}>Nanny.Services</a>
      </div>
      <div className={css.navigationDiv}>
        <div className={css.navigation}>
          <div className={css.ellipseDiv}>
          <NavLink to={"/"}>Home</NavLink>

          </div>
          <div className={css.ellipseDiv}>
          <NavLink to={"/nannies"}>Nannies</NavLink>
      <svg className={`${css.iconEllipse} ${isActive ? css.active : css.block}`}>
  <use xlinkHref={`${sprite}#icon-ellipse`}></use>
</svg>
          </div>
<div className={css.ellipseDiv}>
    
                     {location.pathname !== '/' && (
        <div className={css.ellipseDiv}>
          <NavLink to="/favorites">Favorites</NavLink>
          {/* <svg className={`${css.iconEllipse} ${isActive ? css.active : css.block}`}>
  <use xlinkHref={`${sprite}#icon-ellipse`}></use>
</svg> */}
        </div>
      )}
        {location.pathname === '/favorites' && (
        <svg className={`${css.iconEllipse} ${css.favorites}`}>
          <use xlinkHref={`${sprite}#icon-ellipse`}></use>
        </svg>
      )}
      

</div>
        </div>
        <div className={css.btn}>
          {isAuthenticated ? (
            <UserMenu onLogout={handleLogout} />
          ) : (
            <AuthNav
              onLogInClick={() => setIsLogInModalOpen(true)}
              onRegistrationClick={() => setIsRegistrationModalOpen(true)}
            />
          )}
        </div>
      </div>
      {isLogInModalOpen && (
        <LogInModal
          onClose={() => setIsLogInModalOpen(false)}
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      )}

      {isRegistrationModalOpen && (
        <RegistrationModal
          onClose={() => setIsRegistrationModalOpen(false)}
          onSuccess={handleRegistrationSuccess}
          onError={handleRegistrationError}
        />
      )}

      <ToastContainer />
    </div>
  );
}
