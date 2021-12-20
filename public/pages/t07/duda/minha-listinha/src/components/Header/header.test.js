import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Header from './Header'
   describe('Header component', () =>{
    it('should render the correct header', async () =>{
        render(<Header />)

        const logoImage = await screen.findByAltText('Logotipo minha listinha besha')
        expect(logoImage).toBeInTheDocument()
    })
})