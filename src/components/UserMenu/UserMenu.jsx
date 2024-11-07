import css from "./UserMenu.module.css";
export default function UserMenu({onLogout}) {
    return (
      <div >
<button type='button' className={css.logIn}  onClick={onLogout} >
            Log Out
          </button>
      </div>
    );
  }