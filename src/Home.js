import React from 'react'
import './App.css';
import Original from './images/original.jpg';
import Segmentada from './images/segmentada.png';
import Detectada from './images/detectada.jpg';
import Termica from './images/termica.jpg';

export const Home = () => (
    <div>
        <br/>
        <h2>Acerca de</h2>
        <p>Este es un reporte de inspección de la red de distribución de energía eléctrica de CFE en el Sur de Sonora realizado por Vehículo aéreo no tripulado equipado con Cámara RGB y Cámara térmica FLIR. Las imágenes RGB se analizan con inteligencia artificial y segmentacipara detección de posibles anomalías en las estructuras y también se analizan con segmentación para encontrar posibles problemas con vegetación. Las imágenes térmicas se analizan con filtros gaussianos para detectar posibles puntos calientes.</p>
        <br/>
        <h2>Ejemplo de Anomalías Encontradas</h2>
        <p>Aquí se muestra un ejemplo de 3 imágenes de la estructura 2730 en la cual se detectó una anomalía, las 3 imágenes son: Color real RGB, Imagen con detección por modelo de inteligencia artificial e imagen Térmica FLIR</p>
        <br/>
        <h4>Estructura 2730</h4>
        <h6>Imagen original:</h6>
        <p>Imagen RGB Color real tomada por la cámara del drone.</p>
        <img className="img" src={Original} alt="_"></img>
        <br/>
        <h6>Imagen segmentada:</h6>
        <p>Imagen analizada con inteligencia artificial para segmentar los componentes que pertenecen a la estructura y e ignorar los que no (por eso es que se ilustra el fondo en blanco y negro)</p>
        <img className="img" src={Segmentada} alt="_"></img>
        <br/>
        <h6>Imagen detectada:</h6>
        <p>Resultado de la detección por clasificación supervisada de anomalías en la estructura.</p>
        <img className="img" src={Detectada} alt="_"></img>
        <br/>
        <h6>Imagen Térmica:</h6>
        <p>Imagen Térmica FLIR analizada para puntos fríos y calientes.</p>
        <img className="img" src={Termica} alt="_"></img>
        <br/>
        <br/>
        <h2>Análisis en Tiempo Real Simultáneo </h2>
        <p>Aquí se tiene el análisis realizado simultáneamente con ambas cámaras RGB y FLIR Térmica</p>
        <div class="video">
            <iframe width="550" height="400" src="https://www.youtube.com/embed/SHpPi8OzRqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h2>Video Explicativo del Proyecto</h2>
        <div class="video">
            <iframe width="550" height="400" src="https://www.youtube.com/embed/wVHYY008qbE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
)