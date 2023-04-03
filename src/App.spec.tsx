import { render, screen } from '@testing-library/react'
import App from "./App"
describe('App', () => {
  it('Should match snapshot', () => {
    render(<App />)
    expect(screen.getByTestId('container')).toBeInTheDocument()
  }) 
})
