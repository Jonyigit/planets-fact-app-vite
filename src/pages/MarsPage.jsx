import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Mars from "../widgets/Mars/index";

function MarsPage({ activeList, setActiveList }) {
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

    return <Mars data={data[3]} activeList={activeList} setActiveList={setActiveList} />;
}

export default MarsPage;
