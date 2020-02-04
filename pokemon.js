/**
 * Receive actual position and next step
 * @param lat Latitude in world
 * @param lon Longitude in world
 * @param step What next step
 * @return {Object} New position based in last position and movement
 */
const walkLatLon = (lat, lon, step) => {
    lat = parseInt(lat, 10);
    lon = parseInt(lon, 10);

    step = step.toUpperCase();

    switch (step) {
        case 'N':
            lat -= 1;
        break;

        case 'S':
            lat += 1;
        break;
        
        case 'E':
            lon -= 1; 
        break;
        
        case 'O':
            lon += 1; 
        break;
        
        default: 
            return;
    }

    return { lat, lon };
}

/**
 * Create and compute how many pokemon were caught
 * @param str String with which movements trainer did
 * @return {Integer} How many pokemons were caught
 */
const catchPokemons = (str) => {
    const trail = { '0,0': 1 };

    const steps = str.split('');
    let actual = Object.keys(trail)[0];
    let lat, lon;

    if (steps.length === 1) {
        return 2;
    }

    steps.forEach(step => {
        [ lat, lon ] = actual.split(',');
        const walk = walkLatLon(lat, lon, step);

        if (walk) {
            lat = walk.lat;
            lon = walk.lon;
        } else {
            return;
        }

        actual = `${lat},${lon}`;

        if (!trail[actual]) {
            trail[actual] = 1;
        }
    });

    return Object.keys(trail).length;
}

module.exports = {
    catchPokemons,
}