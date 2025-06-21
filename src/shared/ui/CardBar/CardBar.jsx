import "aos/dist/aos.css";
import clsx from "clsx";
import styles from "./CardBar.module.scss";

function CardBar(props) {
    const { activeList, setActiveList, nameClass } = props;

    const changeActiveList = (value) => {
        setActiveList(value);
    };

    return (
        <ul className={styles.bar} data-aos="fade-left">
            <li
                className={clsx(styles.list, activeList === "overview" && styles[nameClass])}
                onClick={() => changeActiveList("overview")}
            >
                01 <span>OVERVIEW</span>
            </li>
            <li
                className={clsx(styles.list, activeList === "internal" && styles[nameClass])}
                onClick={() => changeActiveList("internal")}
            >
                02 <span>Internal Structure</span>
            </li>
            <li
                className={clsx(styles.list, activeList === "surface" && styles[nameClass])}
                onClick={() => changeActiveList("surface")}
            >
                03 <span>Surface Geology</span>
            </li>
        </ul>
    );
}

export default CardBar;
