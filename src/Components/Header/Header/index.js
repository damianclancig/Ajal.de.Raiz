import MenuBar from '../MenuBar'
import './Header.css'
import logo from '../../../img/Logo.png'


function Header() {

    return (
        <section>
            <div className="titulo">Ajal de Raiz</div>
            <MenuBar />
            <div className='logo'>
                <img src={logo} alt='Ajal de Raiz' width='200px;' />
            </div>
        </section> 
    )
}

export default Header;