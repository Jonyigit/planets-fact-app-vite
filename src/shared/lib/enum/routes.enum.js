const PLANETS = [
    { name: "mercury", path: "/", classIndex: 0 },
    { name: "venus", path: "/venus", classIndex: 1 },
    { name: "earth", path: "/earth", classIndex: 2 },
    { name: "mars", path: "/mars", classIndex: 3 },
    { name: "jupiter", path: "/jupiter", classIndex: 4 },
    { name: "saturn", path: "/saturn", classIndex: 5 },
    { name: "uranus", path: "/uranus", classIndex: 6 },
    { name: "neptune", path: "/neptune", classIndex: 7 },
];

const ROUTES_PATHS = PLANETS.reduce((acc, planet) => {
    acc[planet.name.toUpperCase()] = planet.path;
    return acc;
}, {});

export { PLANETS, ROUTES_PATHS };
