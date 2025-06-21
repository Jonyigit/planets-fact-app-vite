import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Venus from "../widgets/Venus/index";

function VenusPage({ activeList, setActiveList }) {
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

    return <Venus data={data[1]} activeList={activeList} setActiveList={setActiveList} />;
}

export default VenusPage;
