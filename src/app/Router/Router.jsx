import { Routes, Route, Navigate } from "react-router-dom";
import MinLayout from "../../shared/ui/layouts/MinLayout";
import MercuryPage from "../../pages/MercuryPage";
import VenusPage from "../../pages/VenusPage";
import EarthPage from "../../pages/EarthPage";
import MarsPage from "../../pages/MarsPage";
import JupiterPage from "../../pages/JupiterPage";
import SaturnPage from "../../pages/SaturnPage";
import UranusPage from "../../pages/UranusPage";
import NeptunePage from "../../pages/NeptunePage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/earth/overview" replace />} />
            <Route
                path="/mercury/:tab"
                element={
                    <MinLayout>
                        <MercuryPage />
                    </MinLayout>
                }
            />
            <Route
                path="/venus/:tab"
                element={
                    <MinLayout>
                        <VenusPage />
                    </MinLayout>
                }
            />
            <Route
                path="/earth/:tab"
                element={
                    <MinLayout>
                        <EarthPage />
                    </MinLayout>
                }
            />
            <Route
                path="/mars/:tab"
                element={
                    <MinLayout>
                        <MarsPage />
                    </MinLayout>
                }
            />
            <Route
                path="/jupiter/:tab"
                element={
                    <MinLayout>
                        <JupiterPage />
                    </MinLayout>
                }
            />
            <Route
                path="/saturn/:tab"
                element={
                    <MinLayout>
                        <SaturnPage />
                    </MinLayout>
                }
            />
            <Route
                path="/uranus/:tab"
                element={
                    <MinLayout>
                        <UranusPage />
                    </MinLayout>
                }
            />
            <Route
                path="/neptune/:tab"
                element={
                    <MinLayout>
                        <NeptunePage />
                    </MinLayout>
                }
            />
        </Routes>
    );
}

export default Router;
