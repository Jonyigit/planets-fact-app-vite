import { useEffect, useState } from "react";
import AOS from "aos";
import planetData from "../shared/lib/mocks/data";
import Mars from "../widgets/Mars/index";
import { useParams } from "react-router-dom";

function MarsPage({ activeList, setActiveList }) {
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

    return <Mars data={data[3]} activeList={tab} setActiveList={setActiveList} />;
}

export default MarsPage;
