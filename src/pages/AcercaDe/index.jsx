import React from 'react'
import { Helmet } from 'react-helmet'

import "./AcercaDe.scss"

import mini1 from "../../img/mini1.jpg"
import mini2 from "../../img/mini2.jpg"

function AcercaDe() {
    return (
        <>
            <Helmet>
                <title>Acerca de nosotros - Ajal de Raiz</title>
            </Helmet>
            <div className="ramaLateral"></div>
            <div className="panelAcercaDe">
                <p>Es un proyecto que nació lleno de sueños, experiencias y un jardín que no se detiene.</p>
                <p>El jardín AJAL DE RAÍZ tiene como objetivo ofrecer una selección exclusiva de plantas suculentas, cactus y otras especies, 
                    decidimos abordar un nuevo proyecto con la venta de nuestros productos en línea. Una colección que va creciendo y tenemos 
                    muchas especies diferentes, entre ellas, sedum, sempervivum, echeveria, haworthia, crassulas, kalanchoe, varias especies de 
                    cactus y muchas más variedades.</p>
                <p>Este es un sitio para que podamos compartir todo lo que hemos aprendido, Ajal de Raíz nace hace un tiempo luego de un viaje, 
                    nos dimos cuenta que las grandes cosas surgen luego de una gran reinvención. Creemos que todos podemos armar minis bosques, 
                    la idea de este emprendimiento es que encontremos algo para regalarte, pensamos en los detalles para que puedas disfrutarlo y 
                    ayudar en lo que necesitas.</p>
                <p>Pensamos en que no necesitamos grandes espacios para volverlos únicos y verdes, un jardín puede caber en cualquier rincón, podes 
                    construir un mini bosque, uno que que entre en tus manos. Aquí es donde dejamos que la imaginación fluya para armar piezas especiales.</p>
                <div className="minis">
                    <img src={mini1} alt="mini" width='120px' />
                    <img src={mini2} alt="mini" width='120px' />
                </div>
                <p>Te invitamos a que sumes a diseñar tu espacio verde para que pienses verde, porque ¿quién no ama energizarse en los espacio verdes?</p>
            </div>
        </>
    )
}

export default AcercaDe;