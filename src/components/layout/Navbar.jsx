//English: The code defines a Navbar component that displays a navigation bar with the Bosch logo, user information (name and area), and a Sharebi logo.
//Portuguese: O código define um componente Navbar que exibe uma barra de navegação com o logotipo da Bosch, informações do usuário (nome e área) e o logotipo da Sharebi.
//Spanish: El código define un componente Navbar que muestra una barra de navegación con el logotipo de Bosch, información del usuario (nombre y área) y el logotipo de Sharebi.
//German: Der Code definiert ein Navbar-Komponente, das eine Navigationsleiste mit dem Bosch-Logo, Benutzerinformationen (Name und Bereich) und einem Sharebi-Logo anzeigt.

import React from 'react';  // Importing React library
import { Link } from 'react-router-dom';  // Importing Link component from react-router-dom library
import logo from '../layout/img/bosch-logo.png';  // Importing Bosch logo image
import user from '../layout/img/user.jpg';  // Importing user image
import sharebi from '../layout/img/sharebi-logo.png';  // Importing Sharebi logo image
//import customGraphic from '../layout/img/Bosch-Supergraphic_RGB 3.png'; // Importing the custom graphic
import styles from '../layout/Navbar.module.css'; // Importing styles file

function Navbar() {  // Defining Navbar component
    return (  // Returning JSX code
        <nav className={styles.nav}>  {/* Application of the container class */}
            <div className={styles.nav}> {/* Application of the container class */}
                <Link to="/">  {/* Creating a link to the homepage */}
                    <img src={logo} alt="bosch" className={styles.logo} /> {/* Applying the logo class */}
                </Link>
                <div className={styles.user}>  {/* Application of the user class */}
                    <div className=''>  {/* Empty div */}
                        <p className='name'> Davi Lima</p>  {/* Displaying user's name */}
                        <p className={styles.area}>GS/OSD</p>  {/* Displaying user's area */}
                    </div>
                    <img src={user} alt='user'></img>  {/* Displaying user image */}
                </div>
                <div className={styles.sharebi}>  {/* Application of the sharebi class */}
                    <img src={sharebi} alt='user'></img>  {/* Displaying Sharebi logo image */}
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;  // Exporting Navbar component
