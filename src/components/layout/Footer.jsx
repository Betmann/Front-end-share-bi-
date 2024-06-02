// English: This code imports styles from a CSS module and defines a Footer component that displays company rights and legal obligations.

// Portuguese: Este código importa estilos de um módulo CSS e define um componente Footer que exibe os direitos da empresa e as obrigações legais.

// Spanish: Este código importa estilos de un módulo CSS y define un componente Footer que muestra los derechos de la empresa y las obligaciones legales.

// German: Dieser Code importiert Stile aus einem CSS-Modul und definiert eine Footer-Komponente, die die Rechte des Unternehmens und rechtliche Verpflichtungen anzeigt.

import styles from '../layout/Footer.module.css'

function Footer() {

    // English: The Footer component returns a footer element containing two divs. The first div shows the company rights, and the second div shows legal obligations styled using CSS module classes.

    // Portuguese: O componente Footer retorna um elemento footer contendo dois divs. O primeiro div mostra os direitos da empresa e o segundo div mostra as obrigações legais estilizadas usando classes do módulo CSS.

    // Spanish: El componente Footer devuelve un elemento footer que contiene dos divs. El primer div muestra los derechos de la empresa y el segundo div muestra las obligaciones legales estilizadas usando clases del módulo CSS.

    // German: Die Footer-Komponente gibt ein Footer-Element zurück, das zwei Divs enthält. Das erste Div zeigt die Rechte des Unternehmens und das zweite Div zeigt die rechtlichen Verpflichtungen, die mit CSS-Modulklassen gestaltet sind.

    return (
        <footer>
            <div className="bosch-rights">
                <p>© Robert Bosch Ltda. 2024, All rights reserved.</p>
            </div>
            <div className={styles.obligations}>
                <p>Imprint</p>
                <p>Legal informaton</p>
                <p>Data privacy</p>
                <p>Disclosure documents</p>
            </div>
        </footer>

    )
} export default Footer