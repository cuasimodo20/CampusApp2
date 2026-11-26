import { crearSeed } from '../data/seed.js'
import { prestamosActivos } from './prestamos.js'
const hoy = '2026-11-18'
describe('HU-01 · préstamos activos', () => {
it('devuelve solo los préstamos del usuario', () => {
const { prestamos } = crearSeed(hoy)
const lista = prestamosActivos(prestamos, 'ana')
expect(lista).toHaveLength(3)
expect(lista.every((p) => p.usuario === 'ana')).toBe(true)
})
it('no incluye los préstamos ya devueltos', () => {
const prestamos = [
{ id: 'P1', libroId: 'L1', usuario: 'ana', vence: '2026-11-23',

devuelto: true },
{ id: 'P2', libroId: 'L2', usuario: 'ana', vence: '2026-11-23',
devuelto: false },
]
expect(prestamosActivos(prestamos, 'ana').map((p) =>
p.id)).toEqual(['P2'])
})
it('devuelve una lista vacía si el usuario no tiene préstamos', () => {
const { prestamos } = crearSeed(hoy)
expect(prestamosActivos(prestamos, 'nadie')).toEqual([])
})
})
