// English: This code imports styles from a CSS module and the Button component. It defines a Card component that displays information with a button to view more details.

// Portuguese: Este código importa estilos de um módulo CSS e o componente Button. Ele define um componente Card que exibe informações com um botão para ver mais detalhes.

// Spanish: Este código importa estilos de un módulo CSS y el componente Button. Define un componente Card que muestra información con un botón para ver más detalles.

// German: Dieser Code importiert Stile aus einem CSS-Modul und die Button-Komponente. Es definiert eine Card-Komponente, die Informationen mit einem Button zum Anzeigen weiterer Details anzeigt.

import styles from '../pages/home/Home.module.css'
import Button from "./Button"


export default function Card(props) {

    // English: The Card component returns a div element with applied styles. It contains an image, producer and requester information, and a Button component.

    // Portuguese: O componente Card retorna um elemento div com estilos aplicados. Ele contém uma imagem, informações do produtor e do solicitante, e um componente Button.

    // Spanish: El componente Card devuelve un elemento div con estilos aplicados. Contiene una imagen, información del productor y del solicitante, y un componente Button.

    // German: Die Card-Komponente gibt ein div-Element mit angewendeten Stilen zurück. Es enthält ein Bild, Informationen über den Produzenten und den Anfragenden sowie eine Button-Komponente.

    return (

        <div className={styles.card}>
            <img src={props.image} alt='powerbi-img' />
            <div className={styles.description}>
                <div className={styles.title_cards}>
                    <p>Producer: {props.producer}</p>
                    <h5>{props.title}</h5>
                </div>
                <div className={styles.down}>
                    <p>Requester: {props.requester}</p>
                    <Button text="View more"></Button>
                </div>
            </div>
        </div>

    )

}

// English: The following code is commented out. It includes imports, state, and an effect hook for fetching data from an API and rendering it in Card components.

// Portuguese: O código a seguir está comentado. Ele inclui imports, estado e um hook de efeito para buscar dados de uma API e renderizá-los em componentes Card.

// Spanish: El siguiente código está comentado. Incluye imports, estado y un hook de efecto para obtener datos de una API y renderizarlos en componentes Card.

// German: Der folgende Code ist auskommentiert. Es enthält Imports, State und einen Effekt-Hook zum Abrufen von Daten aus einer API und zum Rendern in Card-Komponenten.

//import axios from 'axios';
//import { useState, useEffect } from "react";

// const [powerbis, setPowerbis] = useState([])

// useEffect(() => {
//     axios
//         .get('http://10.234.84.41:8000/api/v1/powerbis/')
//         .then((response) => setPowerbis(response.data, console.log(response.data)))
//         .catch((error) => console.log(error))

// }, []);

// powerbis.map((item, index) => (
//     <div className='card'>
//         <img src={powerbis} alt='powerbi-img' />
//         <div className='description'>
//             <div className='title-cards'>
//                 <p>Produtor: {item.produtor}</p>
//                 <h5>{item.titulo}</h5>
//             </div>
//             <div className='down'>
//                 <p>Solicitante: {item.solicitante}</p>
//                 <button onClick={() => teste(item.link)}>Ver mais</button>
//             </div>
//         </div>
//     </div>
// ))
