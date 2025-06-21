import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MercuryPage from "../../pages/MercuryPage";
import VenusPage from "../../pages/VenusPage";
import MinLayout from "../../layouts/MinLayout";
import EarthPage from "../../pages/EarthPage";
import MarsPage from "../../pages/MarsPage";
import JupiterPage from "../../pages/JupiterPage";
import SaturnPage from "../../pages/SaturnPage";
import UranusPage from "../../pages/UranusPage";
import NeptunePage from "../../pages/NeptunePage";

function Router() {
    const [activeList, setActiveList] = useState("overview");

    return (
        <MinLayout activeList={activeList} setActiveList={setActiveList}>
            <Routes>
                <Route path="/" element={<MercuryPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route path="/venus" element={<VenusPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route path="/earth" element={<EarthPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route path="/mars" element={<MarsPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route
                    path="/jupiter"
                    element={<JupiterPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route path="/saturn" element={<SaturnPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route path="/uranus" element={<UranusPage activeList={activeList} setActiveList={setActiveList} />} />
                <Route
                    path="/neptune"
                    element={<NeptunePage activeList={activeList} setActiveList={setActiveList} />}
                />
            </Routes>
        </MinLayout>
    );
}

export default Router;
