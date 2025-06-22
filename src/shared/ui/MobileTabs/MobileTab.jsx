import clsx from "clsx";
import styles from "./MobileTabs.module.scss";

function MobileTab(props) {
    const { activeList, handleListChange } = props;
    return (
        <ul className={styles.mobileTabs}>
            {["overview", "internal", "surface"].map((item) => (
                <li
                    key={item}
                    className={clsx(activeList === item && styles.mobileTabs__itemActive)}
                    onClick={() => handleListChange(item)}
                >
                    <span>{item === "internal" ? "Structure" : item[0].toUpperCase() + item.slice(1)}</span>
                    <div className={styles.mobileTabs__underline}></div>
                </li>
            ))}
        </ul>
    );
}

export default MobileTab;
