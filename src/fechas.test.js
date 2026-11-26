import { diasEntre, sumarDias, formatoFecha } from './fechas.js'
describe('fechas', () => {
it('cuenta los días entre dos fechas', () => {
expect(diasEntre('2026-11-18', '2026-11-23')).toBe(5)
expect(diasEntre('2026-11-18', '2026-11-16')).toBe(-2)
})
it('suma días a una fecha', () => {
expect(sumarDias('2026-11-28', 3)).toBe('2026-12-01')
})
it('da formato dd/mm/aaaa', () => {
expect(formatoFecha('2026-11-18')).toBe('18/11/2026')
})
})