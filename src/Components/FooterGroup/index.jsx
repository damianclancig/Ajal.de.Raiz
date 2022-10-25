import React from 'react';
import { Link } from 'react-router-dom'
import facebookIcon from '../../img/facebook-icon.png'
import instagramIcon from '../../img/instagram-icon.png'

import './Footer.scss'

export default function Footer() {
    return (
        <footer>
            <section className='footer-container'>
                <div className='social-section'>
                    <h2>Redes sociales</h2>
                    <ul className='listSocial'>
                        <li>
                            <img src={facebookIcon} alt='Facebook' width='30px' />
                            <a href='https://www.facebook.com/ajalderaiz' target="blank">@ajalderaiz</a>
                        </li>
                        <li>
                            <img src={instagramIcon} alt='Instagram' width='30px' />
                            <a href='https://www.instagram.com/ajalderaiz/' target="blank">@ajalderaiz</a>
                        </li>
                    </ul>
                </div>
                <div className='about-section'>
                    <h2>Acerca de Ajal de Raiz</h2>
                    <p>Somos un emprendimiento de plantas y suculentas, también ofrecemos sustratos, alimentos, y servicios para tus plantas.</p>
                    <Link to='/acercade'>Ver más...</Link>
                </div>
                <div className='contact-section'>
                    <h2>Contacto</h2>
                    <div className='contactInfo'>
                        <div className='infoRow'><div>Celular: </div><div className='info'><a href='https://api.whatsapp.com/send?phone=5491168793296' target="blank">+54 9 11 6879-3296</a></div></div>
                        <div className='infoRow'><div>E-mail: </div><div className='info'><a href='mailto: contacto@ajalderaiz.com.ar' target="blank">contacto@ajalderaiz.com.ar</a></div></div>
                        <div className='infoRow'><div>Ubicación: </div><div className='info'>Bernal, Buenos Aires.</div></div>
                    </div>
                </div>
            </section>
            <section className='copyright'>Copyright &copy; Ajal de Raiz 2022</section>
        </footer>
    )
}