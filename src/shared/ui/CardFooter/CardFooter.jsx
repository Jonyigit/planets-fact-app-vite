import styles from "./CardFooter.module.scss";

function CardFooter(props) {
    const { radius, rotation, revolution, temperature } = props;
    return (
        <>
            <div className={styles["card-footer"]}>
                <div className={styles.content}>
                    <span>Rotation time</span>
                    <h2>{rotation}</h2>
                </div>
            </div>
            <div className={styles["card-footer"]}>
                <div className={styles.content}>
                    <span>Revolution time</span>
                    <h2>{revolution}</h2>
                </div>
            </div>
            <div className={styles["card-footer"]}>
                <div className={styles.content}>
                    <span>Radius</span>
                    <h2>{radius}</h2>
                </div>
            </div>
            <div className={styles["card-footer"]}>
                <div className={styles.content}>
                    <span>Average temp</span>
                    <h2>{temperature}</h2>
                </div>
            </div>
        </>
    );
}

export default CardFooter;
