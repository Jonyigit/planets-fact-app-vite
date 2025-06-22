import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../../../shared/ui/MobileMenu/MobileMenu";
import MobileTab from "../../../shared/ui/MobileTabs/MobileTab";
import { PLANETS } from "../../../shared/lib/enum/routes.enum";
import burgerIcon from "../../../shared/assets/icons/burger.svg";
import styles from "./Header.module.scss";

function Header(props) {
    const { activeList, setActiveList } = props;
    const location = useLocation();
    const [activeNav, setActiveNav] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        return setMenuOpen((prev) => !prev);
    };
    const handleListChange = (value) => {
        return setActiveList(value);
    };
    const handleNavClick = (value) => {
        return setActiveNav(value);
    };

    useEffect(() => {
        const current = location.pathname === "/" ? "mercury" : location.pathname.slice(1);
        setActiveNav(current);
    }, [location.pathname]);

    return (
        <>
            <header className={styles.header} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className={styles.header__container}>
                    <Link to={PLANETS[0].path} className={styles.header__logo}>
                        <h1>The planets</h1>
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={styles.nav__list}>
                            {PLANETS.map(({ name, path }) => (
                                <li
                                    key={name}
                                    className={clsx(
                                        styles.nav__item,
                                        activeNav === name && styles[`nav__item--active-${name}`]
                                    )}
                                    onClick={() => handleNavClick(name)}
                                >
                                    <Link to={path}>
                                        <div className={styles.nav__underline}></div>
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button className={styles.burger} onClick={handleMenuToggle}>
                        <img src={burgerIcon} alt="burger menu" />
                    </button>
                </div>
            </header>
            <MobileTab activeList={activeList} handleListChange={handleListChange} />
            <MobileMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </>
    );
}

export default Header;
