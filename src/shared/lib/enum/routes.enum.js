const PLANETS = [
    { name: "mercury", path: "/mercury/overview", classIndex: 0 },
    { name: "venus", path: "/venus/overview", classIndex: 1 },
    { name: "earth", path: "/earth/overview", classIndex: 2 },
    { name: "mars", path: "/mars/overview", classIndex: 3 },
    { name: "jupiter", path: "/jupiter/overview", classIndex: 4 },
    { name: "saturn", path: "/saturn/overview", classIndex: 5 },
    { name: "uranus", path: "/uranus/overview", classIndex: 6 },
    { name: "neptune", path: "/neptune/overview", classIndex: 7 },
];

const ROUTES_PATHS = PLANETS.reduce((acc, planet) => {
    acc[planet.name.toUpperCase()] = planet.path;
    return acc;
}, {});

export { PLANETS, ROUTES_PATHS };
