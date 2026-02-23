//Ejercicio 1: 
let nombre: string = "Oum";
let nivel: number = 8;
let activo: boolean = true;

console.log("Jugador:", nombre, "Nivel:", nivel, "Activo:", activo);

//Ejercicio 2:
let item: any;

item = "Arco";
console.log("Item actual:", item);

item = 3;
console.log("Cantidad:", item);

//Ejercicio 3:
const MAX_VIDAS: number = 3;
let vidas: number = 3;

vidas--;
vidas--;

console.log("Máximo de vidas:", MAX_VIDAS);
console.log("Vidas actuales:", vidas);

//Ejercicio 4:
let ataque: number = 50;
let defensa: number = 30;

let daño: number = ataque - defensa;
console.log("Daño infligido:", daño);

//Ejercicio 5:
function curar(puntosVida: number, curacion: number): number {
    return puntosVida + curacion;
}

console.log("Nueva vida:", curar(50, 10));
console.log("Nueva vida:", curar(30, 20));
console.log("Nueva vida:", curar(80, 5));

//Ejercicio 6:
let armas: string[] = ["Espada", "Arco", "Báculo"];
let puntosVidaArray: number[] = [100, 80, 60];

armas.forEach(arma => console.log("Arma:", arma));
puntosVidaArray.forEach(pv => console.log("Puntos de vida:", pv));

//Ejercicio 7:
let armaJugador: [string, number] = ["Hacha", 40];
console.log("Tupla arma:", armaJugador);

//Ejercicio 8:
interface Personaje {
    nombre: string;
    nivel: number;
    salud: number;
}

let personaje1: Personaje = {
    nombre: "Guerrera Oum",
    nivel: 15,
    salud: 120
};

console.log("Personaje:", personaje1);

//Ejercicio 9:
function presentar(p: Personaje): void {
    console.log(`Soy ${p.nombre}, nivel ${p.nivel}, con ${p.salud} puntos de vida`);
}

presentar(personaje1);

//Ejercicio 10:
enum ClasePersonaje {
    Guerrero,
    Mago,
    Arquero,
    Sanador
}

function obtenerClase(numero: number): string {
    if (ClasePersonaje[numero] !== undefined) {
        return ClasePersonaje[numero];
    }
    return "Clase desconocida";
}
console.log("Clase:", obtenerClase(1));

//Ejercicio 11:
class PersonajeJuego {
    constructor(
        public nombre: string,
        public nivel: number,
        public salud: number
    ) {}

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}`);
    }
}

const pj = new PersonajeJuego("Illidan", 20, 150);
pj.mostrarInfo();

//Ejercicio 12:
class Guerrero extends PersonajeJuego {
    constructor(
        nombre: string,
        nivel: number,
        salud: number,
        public fuerza: number
    ) {
        super(nombre, nivel, salud);
    }

    mostrarInfo(): void {
        console.log(`Guerrero ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}, Fuerza: ${this.fuerza}`);
    }
}

class Mago extends PersonajeJuego {
    constructor(
        nombre: string,
        nivel: number,
        salud: number,
        public mana: number
    ) {
        super(nombre, nivel, salud);
    }

    mostrarInfo(): void {
        console.log(`Mago ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}, Mana: ${this.mana}`);
    }
}

//Ejercicio 13:
let personajes: PersonajeJuego[] = [
    new Guerrero("Grom", 18, 140, 80),
    new Mago("Jaina", 22, 90, 200),
    new Guerrero("Varian", 25, 160, 95),
    new Mago("Medivh", 30, 100, 250)
];

personajes.forEach(p => p.mostrarInfo());

//Ejercicio 14:
function obtenerPrimero<T>(items: T[]): T {
    if (items.length === 0) {
        throw new Error("El array está vacío");
    }

    return items[0]!;
}

console.log("Primer arma:", obtenerPrimero(["Espada", "Arco", "Daga"]));
console.log("Primera poción:", obtenerPrimero([10, 20, 30]));

//Ejercicio 15:
class Jugador {
    constructor(
        public nombre: string,
        public nivel: number,
        public salud: number
    ) {}

    mostrarInfo(): void {
        console.log(`Jugador ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}`);
    }
}

class JugadorGuerrero extends Jugador {
    constructor(nombre: string, nivel: number, salud: number, public fuerza: number) {
        super(nombre, nivel, salud);
    }

    mostrarInfo(): void {
        console.log(`Jugador Guerrero ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}, Fuerza: ${this.fuerza}`);
    }
}

class JugadorMago extends Jugador {
    constructor(nombre: string, nivel: number, salud: number, public mana: number) {
        super(nombre, nivel, salud);
    }

    mostrarInfo(): void {
        console.log(`Jugador Mago ${this.nombre}, Nivel: ${this.nivel}, Salud: ${this.salud}, Mana: ${this.mana}`);
    }
}

let jugadores: Jugador[] = [
    new JugadorGuerrero("Leon", 10, 100, 50),
    new JugadorMago("Ezra", 12, 80, 120),
    new JugadorGuerrero("Bjorn", 15, 130, 70),
    new JugadorMago("Selene", 20, 90, 200)
];

jugadores.forEach(j => j.mostrarInfo());