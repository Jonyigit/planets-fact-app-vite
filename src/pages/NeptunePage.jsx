import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Neptune from "../widgets/Neptune/index";

function NeptunePage({ activeList, setActiveList }) {
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

    return <Neptune data={data[7]} activeList={tab} setActiveList={setActiveList} />;
}

export default NeptunePage;
