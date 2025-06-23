import { useEffect, useState } from "react";
import Router from "../../../app/Router/Router";
import styles from "./Home.module.scss";

function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <Router />
    ) : (
        <div className={styles.loading}>
            <div class={styles.spinner}>
                <div class={styles.spinnerin}></div>
            </div>
        </div>
    );
}

export default Home;
