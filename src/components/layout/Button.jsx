// English: This code imports styles from a CSS module and defines a Button component that uses these styles.

// Portuguese: Este código importa estilos de um módulo CSS e define um componente Button que utiliza esses estilos.

// Spanish: Este código importa estilos de un módulo CSS y define un componente Button que utiliza estos estilos.

// German: Dieser Code importiert Stile aus einem CSS-Modul und definiert eine Button-Komponente, die diese Stile verwendet.

import styles from '../pages/home/Home.module.css'

export default function Button(props) {

// English: The Button component returns a button element with styles applied and displays the text passed as a prop.

// Portuguese: O componente Button retorna um elemento button com estilos aplicados e exibe o texto passado como uma propriedade.

// Spanish: El componente Button devuelve un elemento button con estilos aplicados y muestra el texto pasado como una propiedad.

// German: Die Button-Komponente gibt ein Button-Element mit angewendeten Stilen zurück und zeigt den als Prop übergebenen Text an.

    return (
        <button style={styles.button}>{props.text}</button>
    )

}