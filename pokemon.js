const catchAll = (string) => {
    const caminho = { '0,0': '0,0' };

    const arrSteps = string.split('');
    let actual = Object.keys(caminho)[0];

    arrSteps.forEach(step => {
        let [ lat, lon ] = actual.split(',');

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
                console.log('unknown');
                return;
        }

        actual = `${lat},${lon}`;

        if (caminho[actual] === undefined) {
            caminho[actual] = actual;
        }
    });

    return Object.keys(caminho).length;
}

module.exports = {
    catchAll,
}