import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import arrowIcon from "../../../shared/assets/icons/arrow.svg";
import burgerIcon from "../../../shared/assets/icons/burger.svg";
import styles from "./Header.module.scss";

function Header({ activeList, setActiveList }) {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState("");
    const [menu, setMenu] = useState(false);

    const changeMenu = () => {
        setMenu((prev) => {
            return !prev;
        });
    };

    const changeActiveList = (value) => {
        setActiveList(value);
    };

    const planets = ["", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    useEffect(() => {
        const path = location.pathname.slice(1);
        setActiveNav(path || "");
    }, [location.pathname]);

    const changeActiveNav = (value) => {
        setActiveNav(value);
    };

    return (
        <>
            <header className={styles.header} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className={styles.container}>
                    <Link to={"/"}>
                        <h1>The planets</h1>
                    </Link>
                    <nav className={styles.nav}>
                        <ul className={styles["navbar__nav"]}>
                            {planets.map((planet, index) => (
                                <li
                                    key={planet}
                                    className={clsx(
                                        styles["navbar-list"],
                                        activeNav === planet && styles[`active${index}`]
                                    )}
                                    onClick={() => changeActiveNav(planet)}
                                >
                                    <Link to={`/${planet.length === 0 ? "" : planet}`}>
                                        <div className={styles.line}></div>
                                        <span>{planet.length === 0 ? "mercury" : planet}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.burger} onClick={changeMenu}>
                        <img src={burgerIcon} alt="no photo" />
                    </div>
                </div>
            </header>
            <ul className={styles["side-tab"]}>
                <li
                    className={clsx(activeList === "overview" && styles.active)}
                    onClick={() => changeActiveList("overview")}
                >
                    <span>Overview</span>
                    <div className={styles.line}></div>
                </li>
                <li
                    className={clsx(activeList === "internal" && styles.active)}
                    onClick={() => changeActiveList("internal")}
                >
                    <span>Structure</span>
                    <div className={styles.line}></div>
                </li>
                <li
                    className={clsx(activeList === "surface" && styles.active)}
                    onClick={() => changeActiveList("surface")}
                >
                    <span>Surface</span>
                    <div className={styles.line}></div>
                </li>
            </ul>
            <aside className={clsx(styles.aside, menu === true && styles.show)}>
                <ul className={styles.menu}>
                    <Link to={"/"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle1}></div> mercury
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/venus"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle2}></div> venus
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/earth"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle3}></div> earth
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/mars"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle4}></div> mars
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/jupiter"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle5}></div> jupiter
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/saturn"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle6}></div> saturn
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/uranus"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle7}></div> uranus
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                    <Link to={"/neptune"} onClick={() => setMenu(false)}>
                        <span>
                            <div className={styles.circle8}></div> neptune
                        </span>
                        <img src={arrowIcon} alt="no photo" />
                    </Link>
                </ul>
            </aside>
        </>
    );
}

export default Header;
