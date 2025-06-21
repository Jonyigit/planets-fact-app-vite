import { useEffect, useState } from "react";
import AOS from "aos";
import Uranus from "../widgets/Uranus/index";
import planetData from "../shared/lib/mocks/data";

function UranusPage({ activeList, setActiveList }) {
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

    return <Uranus data={data[6]} activeList={activeList} setActiveList={setActiveList} />;
}

export default UranusPage;
