import MenuBar from '../MenuBar'
import DarkModeBotton from '../DarkModeBotton'
import './Header.css'
import logo from '../../../img/Logo.png'


function Header() {
    
    return (
        <div >
            <DarkModeBotton />
            <section>
                <div className="titulo">Piensa Verde</div>
                <MenuBar />
                <div className='gridLogo'>
                    <div></div>
                    <div className='logo'>
                        <img src={logo} alt='Ajal de Raiz' width='200px;' />
                    </div>
                    <div></div>
                </div>
            </section> 
        </div>
    )
} 

export default Header;