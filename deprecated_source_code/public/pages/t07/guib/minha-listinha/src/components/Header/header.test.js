import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header component', () => {
   it ('should render the correct header', async () =>{
     render (<Header />)

     const LogoImage = await screen.findAllByAltText ('logotipo minha listinha com imagem de avião')
     expect(LogoImage).toBeInTheDocument
   })
}









)