import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MercuryPage from "../../pages/MercuryPage";
import VenusPage from "../../pages/VenusPage";
import MinLayout from "../../shared/ui/layouts/MinLayout";
import EarthPage from "../../pages/EarthPage";
import MarsPage from "../../pages/MarsPage";
import JupiterPage from "../../pages/JupiterPage";
import SaturnPage from "../../pages/SaturnPage";
import UranusPage from "../../pages/UranusPage";
import NeptunePage from "../../pages/NeptunePage";
import { ROUTES_PATHS } from "../../shared/lib/enum/routes.enum";

function Router() {
    const [activeList, setActiveList] = useState("overview");

    return (
        <MinLayout activeList={activeList} setActiveList={setActiveList}>
            <Routes>
                <Route
                    path={ROUTES_PATHS.MERCURY}
                    element={<MercuryPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.VENUS}
                    element={<VenusPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.EARTH}
                    element={<EarthPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.MARS}
                    element={<MarsPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.JUPITER}
                    element={<JupiterPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.SATURN}
                    element={<SaturnPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.URANUS}
                    element={<UranusPage activeList={activeList} setActiveList={setActiveList} />}
                />
                <Route
                    path={ROUTES_PATHS.NEPTUNE}
                    element={<NeptunePage activeList={activeList} setActiveList={setActiveList} />}
                />
            </Routes>
        </MinLayout>
    );
}

export default Router;
