import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/loginSlice";
import styles from "./navbar.module.css";

import logo from "/img/argentBankLogo.webp";
import profilIcon from "/img/profil-icon.svg";
import logoutIcon from "/img/logout.svg";

const Navbar = () => {
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    const userName = useSelector((state) => state.user.userName);

    return (
        <nav className={styles.nav}>
            {token ? (
                <>
                    <Link to={"/"} target="_top">
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="Argen Bank's logo"
                        />
                    </Link>
                    <div className={styles.userLinks}>
                        <Link to={"/user"} target="_top">
                            <img
                                className={styles.profil}
                                src={profilIcon}
                                alt="Profil icon"
                            />
                            {userName}
                        </Link>
                        <Link
                            to={"/"}
                            target="_top"
                            onClick={() => dispatch(logout())}>
                            <img
                                className={styles.logout}
                                src={logoutIcon}
                                alt="Profil Icon"
                            />
                            <p>Sign Out</p>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <Link to={"/"} target="_top">
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="Argen Bank's logo"
                        />
                    </Link>
                    <Link to={"/sign-in"} target="_top">
                        <img
                            className={styles.profil}
                            src={profilIcon}
                            alt="Profil Icon"
                        />
                        <p>Sign In</p>
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
