import { sumarDias } from '../domain/fechas.js'
// Datos de ejemplo de BiblioApp. Todo es ficticio.
// Las fechas se calculan a partir de "hoy" para que siempre se vean cercanas.
export function crearSeed(hoy) {
const en = (dias) => sumarDias(hoy, dias)
return {
libros: [
{ id: 'L1', titulo: 'Ingeniería de Software', autor: 'Ian Sommerville',
tema: 'software', ejemplares: 2 },
{ id: 'L2', titulo: 'Redes de Computadoras', autor: 'Andrew Tanenbaum',
tema: 'redes', ejemplares: 1 },
{ id: 'L3', titulo: 'Clean Code', autor: 'Robert C. Martin', tema:
'software', ejemplares: 1 },
{ id: 'L4', titulo: 'Bases de Datos', autor: 'Abraham Silberschatz',
tema: 'datos', ejemplares: 3 },
{ id: 'L5', titulo: 'Scrum', autor: 'Jeff Sutherland', tema:
'metodologías ágiles', ejemplares: 1 },
{ id: 'L6', titulo: 'Curso intensivo de Python', autor: 'Eric Matthes',
tema: 'programación', ejemplares: 3 },
{ id: 'L7', titulo: 'Sistemas Operativos Modernos', autor: 'Andrew',
tema: 'sistemas', ejemplares: 1 },
],
prestamos: [
{ id: 'P1', libroId: 'L1', usuario: 'ana', vence: en(5), devuelto:
false },
{ id: 'P2', libroId: 'L2', usuario: 'ana', vence: en(1), devuelto:
false },
{ id: 'P3', libroId: 'L3', usuario: 'ana', vence: en(-2), devuelto:
false },
{ id: 'P4', libroId: 'L5', usuario: 'bruno', vence: en(3), devuelto:
false },
{ id: 'P5', libroId: 'L4', usuario: 'bruno', vence: en(4), devuelto:
false },
{ id: 'P6', libroId: 'L4', usuario: 'carla', vence: en(9), devuelto:
false },
{ id: 'P7', libroId: 'L7', usuario: 'carla', vence: en(6), devuelto:
    false },
  ],
  }
}
