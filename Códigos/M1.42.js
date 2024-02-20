const ataqueGolpe = function(){
    return "Atacando con golpe";
}

const ataqueRayo = function(){
    return "Atacando con rayo fulminante";
}

const atacar = function(ataque){
    return function(personaje){
        return ataque() + " a " + personaje;
    }
}

console.log(atacar(ataqueGolpe)("Personaje 1"));
console.log(atacar(ataqueRayo)("Personaje 2"));
