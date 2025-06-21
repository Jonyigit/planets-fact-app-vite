import { useEffect, useState } from "react";
import AOS from "aos";
import Jupiter from "../widgets/Jupiter/index";
import planetData from "../shared/lib/mocks/data";

function JupiterPage({ activeList, setActiveList }) {
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

    return <Jupiter data={data[4]} activeList={activeList} setActiveList={setActiveList} />;
}

export default JupiterPage;
