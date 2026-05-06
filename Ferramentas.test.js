const {metroPes, pesMetro,quilometroMilha,
    milhaquilometro,
    centimetroPolegada,
    polegadaCentimetro,
    quilogramaLibra,
    libraQuilograma,
    fahrenheitCelsius,
    celsiusFahrenheit,
    kelvinCelsius,
    celsiusKelvin,
    realDolar,
    dolarReal,
    realEuro,
    euroReal,
    realWon,
    wonReal,
    horasMillissegundos,
    millisegundosHoras,} = require('./Ferramentas');

test('1 metro vira 3,281 pes', () => {
    expect(metroPes(1)).toBe(3.281);
});

test('3.281 pes vira 1 metro', () => {
    expect(pesMetro(3.281)).toBe(1);
});

test('1 quilometro vira 0,621 milhas', () => {
    expect(quilometroMilha(1)).toBe(0.621);
});

test('0.621 milhas vira 1 quilometro', () => {
    expect(milhaquilometro(0.621)).toBe(1);
});

test('1 centimetro vira 0,394 polegadas', () => {
    expect(centimetroPolegada(1)).toBe(0.394);
});

test('0.394 polegadas vira 1 centimetro', () => {
    expect(polegadaCentimetro(0.394)).toBe(1);
}); 

test('1 quilograma vira 2,205 libras', () => {
    expect(quilogramaLibra(1)).toBe(2.205);
});

test('2.205 libras vira 1 quilograma', () => {
    expect(libraQuilograma(2.205)).toBe(1);
}); 

test('1 fahrenheit vira -17,222 celsius', () => {
    expect(fahrenheitCelsius(1)).toBe(-17.222);
});

test('-17.222 celsius vira 1 fahrenheit', () => {
    expect(celsiusFahrenheit(-17.222)).toBe(1);
});

test('1 kelvin vira -272,15 celsius', () => {
    expect(kelvinCelsius(1)).toBe(-272.15);
});

test('-272.15 celsius vira 1 kelvin', () => {
    expect(celsiusKelvin(-272.15)).toBe(1);
});

test('1 real vira 0,201 dolar', () => {
    expect(realDolar(1)).toBe(0.201);
});

test('0.201 dolar vira 1 real', () => {
    expect(dolarReal(0.201)).toBe(1);
});

test('1 real vira 0,170 euro', () => {
    expect(realEuro(1)).toBe(0.170);
});

test('0.170 euro vira 1 real', () => {
    expect(euroReal(0.170)).toBe(1);
});

test('1 real vira 133,33 won', () => {
    expect(realWon(1)).toBe(133.33);
});

test('133.33 won vira 1 real', () => {
    expect(wonReal(133.33)).toBe(1);
});

test('1 hora vira 3600000 milissegundos', () => {
    expect(horasMillissegundos(1)).toBe(3600000);
});

test('3600000 milissegundos vira 1 hora', () => {
    expect(millisegundosHoras(3600000)).toBe(1);
});

module.exports = {