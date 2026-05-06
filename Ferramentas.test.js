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
    millisegundosHoras} = require('./Ferramentas');

test('1 metro vira 3,281 pes', () => {
    expect(metroPes(1)).toBe(3.281);
});
test('2 metros vira 6,562 pes', () => {
    expect(metroPes(2)).toBe(6.562);
});
test('3 metros vira 9,843 pes', () => {
    expect(metroPes(3)).toBe(9.843);
});

test('3.281 pes vira 1 metro', () => {
    expect(pesMetro(3.281)).toBe(1);
});
test('6.562 pes vira 2 metros', () => {
    expect(pesMetro(6.562)).toBe(2);
});
test('9.843 pes vira 3 metros', () => {
    expect(pesMetro(9.843)).toBe(3);
});

test('1 quilometro vira 0,621 milhas', () => {
    expect(quilometroMilha(1)).toBe(0.621);
});
test('2 quilometros vira 1,242 milhas', () => {
    expect(quilometroMilha(2)).toBe(1.242);
});
test('3 quilometros vira 1,863 milhas', () => {
    expect(quilometroMilha(3)).toBe(1.863);
});

test('0.621 milhas vira 1 quilometro', () => {
    expect(milhaquilometro(0.621)).toBe(1);
});
test('1.242 milhas vira 2 quilometros', () => {
    expect(milhaquilometro(1.242)).toBe(2);
});
test('1.863 milhas vira 3 quilometros', () => {
    expect(milhaquilometro(1.863)).toBe(3);
});

test('1 centimetro vira 0,394 polegadas', () => {
    expect(centimetroPolegada(1)).toBeCloseTo(0.394);
});
test('2 centimetros vira 0,788 polegadas', () => {
    expect(centimetroPolegada(2)).toBeCloseTo(0.788);
});
test('3 centimetros vira 1,182 polegadas', () => {
    expect(centimetroPolegada(3)).toBeCloseTo(1.182);
});

test('0.394 polegadas vira 1 centimetro', () => {
    expect(polegadaCentimetro(0.394)).toBeCloseTo(1);
}); 
test('0.788 polegadas vira 2 centimetros', () => {
    expect(polegadaCentimetro(0.788)).toBeCloseTo(2);
}); 
test('1.182 polegadas vira 3 centimetros', () => {
    expect(polegadaCentimetro(1.182)).toBeCloseTo(3);
}); 

test('1 quilograma vira 2,205 libras', () => {
    expect(quilogramaLibra(1)).toBe(2.205);
});
test('2 quilogramas vira 4,410 libras', () => {
    expect(quilogramaLibra(2)).toBe(4.410);
});
test('3 quilogramas vira 6,615 libras', () => {
    expect(quilogramaLibra(3)).toBe(6.615);
});

test('2.205 libras vira 1 quilograma', () => {
    expect(libraQuilograma(2.205)).toBe(1);
}); 
test('4.410 libras vira 2 quilogramas', () => {
    expect(libraQuilograma(4.410)).toBe(2);
}); 
test('6.615 libras vira 3 quilogramas', () => {
    expect(libraQuilograma(6.615)).toBe(3);
}); 

test('1 fahrenheit vira -17,222 celsius', () => {
    expect(fahrenheitCelsius(1)).toBeCloseTo(-17.222);
});
test('2 fahrenheit vira -34.444 celsius', () => {
    expect(fahrenheitCelsius(2)).toBeCloseTo(-34.444);
});
test('3 fahrenheit vira -51.666 celsius', () => {
    expect(fahrenheitCelsius(3)).toBeCloseTo(-51.666);
});

test('-17.222 celsius vira 1 fahrenheit', () => {
    expect(celsiusFahrenheit(-17.222)).toBeCloseTo(1);
});
test('-34.444 celsius vira 2 fahrenheit', () => {
    expect(celsiusFahrenheit(-34.444)).toBeCloseTo(2);
});
test('-51.666 celsius vira 3 fahrenheit', () => {
    expect(celsiusFahrenheit(-51.666)).toBeCloseTo(3);
});

test('1 kelvin vira -272,15 celsius', () => {
    expect(kelvinCelsius(1)).toBe(-272.15);
});
test('2 kelvins vira -272,15 celsius', () => {
    expect(kelvinCelsius(2)).toBe(-544,30);
});
test('3 kelvins vira -272,15 celsius', () => {
    expect(kelvinCelsius(3)).toBe(-816,45);
});

test('-272.15 celsius vira 1 kelvin', () => {
    expect(celsiusKelvin(-272.15)).toBe(1);
});
test('-272.15 celsius vira 1 kelvin', () => {
    expect(celsiusKelvin(-544.30)).toBe(2);
});
test('-272.15 celsius vira 1 kelvin', () => {
    expect(celsiusKelvin(-816.45)).toBe(3);
});

test('1 real vira 0,201 dolar', () => {
    expect(realDolar(1)).toBeCloseTo(0.201);
});
test('2 reais vira 0,402 dolares', () => {
    expect(realDolar(2)).toBeCloseTo(0.402);
});
test('3 reais vira 0,603 dolares', () => {
    expect(realDolar(3)).toBeCloseTo(0.603);
});

test('0.201 dolar vira 1 real', () => {
    expect(dolarReal(0.201)).toBeCloseTo(1, 2);
});
test('0.402 dolar vira 2 reais', () => {
    expect(dolarReal(0.402)).toBeCloseTo(2, 2);
});
test('0.603 dolar vira 3 reais', () => {
    expect(dolarReal(0.603)).toBeCloseTo(3, 2);
});

test('1 real vira 0,180 euro', () => {
    expect(realEuro(1)).toBeCloseTo(0.180, 2);
});
test('2 reais vira 0,360 euros', () => {
    expect(realEuro(2)).toBeCloseTo(0.360, 2);
});
test('3 reais vira 0,540 euros', () => {
    expect(realEuro(3)).toBeCloseTo(0.540, 2);
});

test('0.180 euro vira 1 real', () => {
    expect(euroReal(0.180)).toBeCloseTo(1, 1);
});
test('0.360 euro vira 2 reais', () => {
    expect(euroReal(0.360)).toBeCloseTo(2, 1);
});
test('0.540 euro vira 3 reais', () => {
    expect(euroReal(0.540)).toBeCloseTo(3, 1);
});

test('1 real vira 133,33 won', () => {
    expect(realWon(1)).toBe(133.33);
});
test('2 reais vira 266,66 won', () => {
    expect(realWon(2)).toBe(266.66);
});
test('3 reais vira 399,99 won', () => {
    expect(realWon(3)).toBe(399.99);
});

test('133.33 won vira 1 real', () => {
    expect(wonReal(133.33)).toBe(1);
});
test('266.66 won vira 2 reais', () => {
    expect(wonReal(266.66)).toBe(2);
});
test('399.99 won vira 3 reais', () => {
    expect(wonReal(399.99)).toBe(3);
});

test('1 hora vira 3600000 milissegundos', () => {
    expect(horasMillissegundos(1)).toBe(3600000);
});
test('2 horas vira 7200000 milissegundos', () => {
    expect(horasMillissegundos(2)).toBe(7200000);
});
test('3 horas vira 10800000 milissegundos', () => {
    expect(horasMillissegundos(3)).toBe(10800000);
});

test('3600000 milissegundos vira 1 hora', () => {
    expect(millisegundosHoras(3600000)).toBe(1);
});
test('7200000 milissegundos vira 2 horas', () => {
    expect(millisegundosHoras(7200000)).toBe(2);
});
test('10800000 milissegundos vira 3 horas', () => {
    expect(millisegundosHoras(10800000)).toBe(3);
});

module.exports = {
    metroPes,
    pesMetro,
    quilometroMilha,
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
    millisegundosHoras
}