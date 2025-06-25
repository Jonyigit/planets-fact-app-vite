import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Venus from "../widgets/Venus/index";
import { useParams } from "react-router-dom";

function VenusPage({ activeList, setActiveList }) {
    const { tab } = useParams();
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

    return <Venus data={data[1]} activeList={tab} setActiveList={setActiveList} />;
}

export default VenusPage;
