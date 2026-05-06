// ========== CONVERSORES DE DISTÂNCIA ==========

function metroPes(m){
    return m*3.281;
}

function pesMetro(p){
    return p/3.281;
}

function quilometroMilha(km){
    return km * 0.621;
}

function milhaquilometro(milha){
    return milha / 0.621;
}

function centimetroPolegada(cm){
    return cm / 2.54;
}

function polegadaCentimetro(polegada){
    return polegada * 2.54;
}

// ========== CONVERSORES DE PESO ==========

function quilogramaLibra(kg){
    return kg * 2.205;
}

function libraQuilograma(libra){
    return libra / 2.205;
}

// ========== CONVERSORES DE TEMPERATURA ==========

function fahrenheitCelsius(f){
    return (f - 32) * 5/9;
}

function celsiusFahrenheit(c){
    return (c * 9/5) + 32;
}

function kelvinCelsius(k){
    return k - 273.15;
}

function celsiusKelvin(c){
    return c + 273.15;
}

// ========== CONVERSORES DE MOEDA ==========

function realDolar(real){
    return real / 4.97; // taxa aproximada
}

function dolarReal(dolar){
    return dolar * 4.97;
}

function realEuro(real){
    return real / 5.45; // taxa aproximada
}

function euroReal(euro){
    return euro * 5.45;
}

function realWon(real){
    return real * 133.33; // taxa aproximada
}

function wonReal(won){
    return won / 133.33;
}

// ========== CONVERSORES DE TEMPO ==========

function horasMillissegundos(horas){
    return horas * 3600000;
}

function millisegundosHoras(ms){
    return ms / 3600000;
}


module.exports = {
    // Conversores de distância
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
};