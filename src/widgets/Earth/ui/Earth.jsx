import "aos/dist/aos.css";
import Card from "../../../shared/ui/Card/Card";
import CardFooter from "../../../shared/ui/CardFooter/CardFooter";
import styles from "./Earth.module.scss";
import clsx from "clsx";

function Earth({ data, activeList, setActiveList }) {
    const {
        images: { planet, internal, geology },
        name,
        overview,
        structure,
        geology: geologyData,
        radius,
        rotation,
        revolution,
        temperature,
    } = data;

    const activeMap = {
        overview: {
            image: planet,
            content: overview.content,
            source: overview.source,
        },
        internal: {
            image: internal,
            content: structure.content,
            source: structure.source,
        },
        surface: {
            image: geology,
            content: geologyData.content,
            source: geologyData.source,
        },
    };

    const { image, content, source } = activeMap[activeList] || activeMap["overview"];

    return (
        <section className={styles["planet-earth-section"]}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div
                        className={styles["planet-picture"]}
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        key={activeList}
                    >
                        <img
                            src={image}
                            className={clsx(styles.planetImage, {
                                [styles.surface]: activeList === "surface",
                            })}
                            alt="no photo"
                        />
                    </div>
                    <Card
                        name={name}
                        content={content}
                        source={source}
                        activeList={activeList}
                        setActiveList={setActiveList}
                        nameClass={"earth-color"}
                    />
                </div>
                <footer className={styles.footer} data-aos="fade-up" data-aos-duration="3000">
                    <CardFooter radius={radius} rotation={rotation} revolution={revolution} temperature={temperature} />
                </footer>
            </div>
        </section>
    );
}

export default Earth;
