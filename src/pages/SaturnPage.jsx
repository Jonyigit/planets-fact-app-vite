import { useEffect, useState } from "react";
import AOS from "aos";
import Saturn from "../widgets/Saturn/index";
import planetData from "../shared/lib/mocks/data";

function SaturnPage({ activeList, setActiveList }) {
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

    return <Saturn data={data[5]} activeList={activeList} setActiveList={setActiveList} />;
}

export default SaturnPage;
