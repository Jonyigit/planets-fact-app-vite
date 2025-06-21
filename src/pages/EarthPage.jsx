import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Earth from "../widgets/Earth/index";

function EarthPage({ activeList, setActiveList }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(planetData);
    }, []);

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }, []);

    if (!data) return;

    return <Earth data={data[2]} activeList={activeList} setActiveList={setActiveList} />;
}

export default EarthPage;
