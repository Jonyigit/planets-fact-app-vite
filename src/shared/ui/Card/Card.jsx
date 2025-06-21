import "aos/dist/aos.css";
import linkIcon from "../../assets/icons/link.svg";
import CardBar from "../CardBar/CardBar";
import styles from "./Card.module.scss";

function Card(props) {
    const { name, source, content, activeList, setActiveList, nameClass } = props;
    return (
        <div className={styles.card}>
            <div className={styles.content} data-aos="fade-right" key={activeList}>
                <h1>{name}</h1>
                <p className={styles.desc}>{content}</p>
                <div className={styles.source}>
                    <span>Source :</span>
                    <a href={source} target="_blank">
                        Wikipedia <img src={linkIcon} alt="no photo" />
                    </a>
                </div>
            </div>
            <CardBar activeList={activeList} setActiveList={setActiveList} nameClass={nameClass} />
        </div>
    );
}

export default Card;
