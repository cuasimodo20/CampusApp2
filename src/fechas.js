// Funciones de fechas. Las fechas son texto 'AAAA-MM-DD'.
const MS_DIA = 24 * 60 * 60 * 1000
export function hoyISO() {
return new Date().toISOString().slice(0, 10)
}
export function diasEntre(desde, hasta) {
return Math.round((Date.parse(hasta) - Date.parse(desde)) / MS_DIA)
}
export function sumarDias(fecha, n) {
return new Date(Date.parse(fecha) + n * MS_DIA).toISOString().slice(0, 10)
}
export function formatoFecha(fecha) {
const [a, m, d] = fecha.split('-')
return `${d}/${m}/${a}`
}