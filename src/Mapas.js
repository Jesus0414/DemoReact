import React from 'react'
import  Map  from './components/map';

export const Mapas = () => (
    <div>
        <br/>
        <h2>Mapas </h2>
        <h4>Red inspeccionada</h4>
        <p>Se inspeccionaron las redes COT04010 y LST OVI 73510 COT Administradas por CFE que se encuentran en el área cercana a la presa el Oviachic.</p>
        <p>En este mapa se pueden ver ambas polilíneas de redes, también los puntos de las estructuras. Dar click a los círculos en los mapas para ver detalles</p>
        <Map/>
        <br/>
        <h4>Imágenes tomadas con Drones</h4>
        <p>Aquí se muestran las ubicaciones geográficas extraídas de los metadatos de las imágenes de dónde fueron capturadas con ambas cámaras con el drone, en Violeta las imágenes tomadas con la Cámara de color real (RGB) y en Rojo las tomadas con la cámara Termica (FLIR). Dar click a los círculos en los mapas para ver detalles</p>
        <Map/>
        <br/>
        <h4>Mapa de Imágenes con Anomalías</h4>
        <p>Mapa de estructuras de electricidad en los cuales se detectaron anomalías usando inteligencia artificial, dar click a los círculos en los mapas para ver detalles.</p>
        <Map/>
        <br/>
    </div>
)