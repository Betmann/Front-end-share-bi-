import React from 'react'; // Importing React library for building UI components.
import styles from './Sidebar.module.css'; // Importing CSS module for styling the component.
import { IoHappyOutline } from "react-icons/io5"; // Importing an icon from the react-icons library.

// Defining the Sidebar component.
const Sidebar = () => {
    return (
        <div className={styles.sidebar}> {/* Applying CSS module style to the div. */}
            <ul>
                {/* Rendering list items each containing the IoHappyOutline icon. */}
                <li><IoHappyOutline /></li>
                <li><IoHappyOutline /></li>
                <li><IoHappyOutline /></li>
                <li><IoHappyOutline /></li>
                <li><IoHappyOutline /></li>
                <li><IoHappyOutline /></li>
            </ul>
        </div>
    );
}

// Exporting the Sidebar component to be used in other parts of the application.
export default Sidebar;
