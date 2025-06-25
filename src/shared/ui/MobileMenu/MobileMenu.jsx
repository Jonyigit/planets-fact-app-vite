import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PLANETS } from "../../lib/enum/routes.enum";
import arrowIcon from "../../assets/icons/arrow.svg";
import styles from "./MobileMenu.module.scss";

function MobileMenu(props) {
    const { setMenuOpen, menuOpen } = props;

    useEffect(() => {
        if (menuOpen) {
            document.body.style.cssText = `
            @media (max-width: 755px){
                body{
                    overflow: hidden;
                }
            }
        `;
        } else {
            document.body.style.cssText = `overflow: auto;`;
        }
    }, [menuOpen]);

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
