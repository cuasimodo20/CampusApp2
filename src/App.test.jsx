import { render, screen } from '@testing-library/react'
import App from './App.jsx'
describe('App', () => {
it('frase del dia', () => {
render(<App />)
     expect(screen.getByText('Campus+')).toBeTruthy()
})
})