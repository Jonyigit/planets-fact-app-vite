import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./MobileTabs.module.scss";

function MobileTab() {
    const { pathname } = useLocation();
    const name = pathname.split("/")[1];

    const tabs = ["overview", "internal", "surface"];

    return (
        <ul className={styles.mobileTabs}>
            {tabs.map((item) => (
                <NavLink
                    to={`/${name}/${item}`}
                    key={item}
                    className={({ isActive }) =>
                        clsx(styles.mobileTabs__item, {
                            [styles.mobileTabs__itemActive]: isActive,
                        })
                    }
                >
                    <span>{item === "internal" ? "Structure" : item[0].toUpperCase() + item.slice(1)}</span>
                    <div className={styles.mobileTabs__underline}></div>
                </NavLink>
            ))}
        </ul>
    );
}

export default MobileTab;
