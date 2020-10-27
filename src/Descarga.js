  
import React from 'react';
import './App.css';
import Original from './images/original.jpg';
import Segmentada from './images/segmentada.png';
import Detectada from './images/detectada.jpg';
import Termica from './images/termica.jpg';

export const Descarga = () => (
    <div>
        <h2>Descarga de Reportes </h2>
        <p>3.1) Ejemplo de Anomalías Encontradas</p>
        <p>Aquí se muestra un ejemplo de 3 imágenes de la estructura 2730 en la cual se detectó una anomalía, las 3 imágenes son: Color real RGB, Imagen con detección por modelo de inteligencia artificial e imagen Térmica FLIR</p>
        <p>3.2) Estructura 2730</p>
        <p>Imagen original: Imagen RGB Color real tomada por la cámara del drone.</p>
        <img className="img" src={Original} alt="_"></img>
        <p>Imagen segmentada: Imagen analizada con inteligencia artificial para segmentar los componentes que pertenecen a la estructura y e ignorar los que no (por eso es que se ilustra el fondo en blanco y negro)</p>
        <img className="img" src={Segmentada} alt="_"></img>
        <p>Imagen detectada: Resultado de la detección por clasificación supervisada de anomalías en la estructura.</p>
        <img className="img" src={Detectada} alt="_"></img>
        <p>Imagen Térmica: Imagen Térmica FLIR analizada para puntos fríos y calientes.</p>
        <img className="img" src={Termica} alt="_"></img>
    </div>
)