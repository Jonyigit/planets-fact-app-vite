import "aos/dist/aos.css";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import styles from "./CardBar.module.scss";

function CardBar({ activeList, nameClass }) {
    const { pathname } = useLocation();
    const basePath = pathname.split("/")[1];

    return (
        <ul className={styles.bar} data-aos="fade-left">
            <Link to={`/${basePath}/overview`}>
                <li className={clsx(styles.list, activeList === "overview" && styles[nameClass])}>
                    01 <span>OVERVIEW</span>
                </li>
            </Link>
            <Link to={`/${basePath}/internal`}>
                <li className={clsx(styles.list, activeList === "internal" && styles[nameClass])}>
                    02 <span>Internal Structure</span>
                </li>
            </Link>
            <Link to={`/${basePath}/surface`}>
                <li className={clsx(styles.list, activeList === "surface" && styles[nameClass])}>
                    03 <span>Surface Geology</span>
                </li>
            </Link>
        </ul>
    );
}

export default CardBar;
