import logoImage from '../../assets/logo.svg'
import './header.styles.css'

const Header = () =>{
  return(
    <header className='header'>
      <div>
        <img src={logoImage} alt='Logotipo minha listinha besha' />
        
      </div>
  </header>
  )

}
   
  export default Header