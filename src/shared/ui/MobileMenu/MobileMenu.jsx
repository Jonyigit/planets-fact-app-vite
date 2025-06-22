import clsx from "clsx";
import { Link } from "react-router-dom";
import { PLANETS } from "../../lib/enum/routes.enum";
import arrowIcon from "../../assets/icons/arrow.svg";
import styles from "./MobileMenu.module.scss";

function MobileMenu(props) {
    const { setMenuOpen, menuOpen } = props;
    return (
        <aside className={clsx(styles.mobileMenu, menuOpen && styles.mobileMenu__open)}>
            <ul className={styles.mobileMenu__list}>
                {PLANETS.map(({ name, path }) => (
                    <Link key={name} to={path} onClick={() => setMenuOpen(false)}>
                        <span>
                            <div className={styles[`planetDot-${name}`]}></div> {name}
                        </span>
                        <img src={arrowIcon} alt="arrow icon" />
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default MobileMenu;
