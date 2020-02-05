const { catchPokemons, walkLatLon } = require('./pokemon');

test('catch two pokemons', () => {
  expect(catchPokemons('N')).toBe(2);
});

test('catch two pokemons', () => {
    expect(catchPokemons('NSNS')).toBe(2);
});

test('catch first pokemon with dr oak', () => {
    expect(catchPokemons('1')).toBe(1);
});

test('catch four pokemons', () => {
    expect(catchPokemons('NESO')).toBe(4);
});

test('movement in lat/lon in lat', () => {
    expect(walkLatLon(0,0, 'N')).toStrictEqual({ lat: -1, lon: 0 });
});


test('movement in lat/lon in lon', () => {
    expect(walkLatLon(10,30, 'O')).toStrictEqual({ lat: 10, lon: 31 });
});
