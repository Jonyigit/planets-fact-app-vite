import { useEffect, useState } from "react";
import AOS from "aos";
import Mercury from "../widgets/Mercury/index";
import planetData from "../shared/lib/mocks/data";
import { useParams } from "react-router-dom";

function MercuryPage({ activeList, setActiveList }) {
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

    return <Mercury data={data[0]} activeList={tab} setActiveList={setActiveList} />;
}

export default MercuryPage;
