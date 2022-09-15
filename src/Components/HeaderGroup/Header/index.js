import MenuBar from '../MenuBar'
import DarkModeBotton from '../DarkModeBotton'
import './Header.css'


function Header() {
    
    return (
        <div >
            <DarkModeBotton />
            <section>
                <div className="titulo">Piensa Verde</div>
                <MenuBar />
                <div className='gridLogo'>
                    <div className='logo' />
                    <div className='kokedama' />
                </div>
            </section> 
        </div>
    )
} 

export default Header;