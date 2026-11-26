import { render, screen } from '@testing-library/react'
import App from './App.jsx'
describe('HU-01 · Mis préstamos', () => {
  it('muestra los préstamos activos con su libro y fecha de devolución', () => {
    render(<App hoy="2026-11-25" />)
    expect(screen.getByText('Fecha de devoluciòn')).toBeTruthy()
    expect(screen.getByText('Devolución: 23/11/2026')).toBeTruthy()
    expect(screen.getByText('Redes de Computadoras')).toBeTruthy()
    expect(screen.getByText('Clean Code')).toBeTruthy()
})
it('no muestra los préstamos de otras personas', () => {
 render(<App hoy="2026-11-18" />)
 expect(screen.queryByText('Scrum')).toBeNull()
})
})