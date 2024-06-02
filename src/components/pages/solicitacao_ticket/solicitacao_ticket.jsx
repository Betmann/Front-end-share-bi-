// This component handles a form for submitting a request related to Power BI publication. 
// It utilizes React's useState hook for managing form inputs, Axios for making HTTP POST requests, and CSS modules for styling.
//
// Este componente lida com um formulário para enviar uma solicitação relacionada à publicação do Power BI. 
// Ele utiliza o hook useState do React para gerenciar entradas de formulário, Axios para fazer requisições HTTP POST e módulos CSS para estilização.
//
// Este componente maneja un formulario para enviar una solicitud relacionada con la publicación de Power BI. 
// Utiliza el hook useState de React para gestionar las entradas del formulario, Axios para hacer solicitudes HTTP POST y módulos CSS para estilizar.
//
// Diese Komponente verarbeitet ein Formular zur Übermittlung einer Anfrage im Zusammenhang mit der Veröffentlichung von Power BI. 
// Es verwendet den useState-Hook von React zur Verwaltung der Formulareingaben, Axios für HTTP-POST-Anfragen und CSS-Module für das Styling.

import { useState } from 'react'; // Importing the useState hook from React for managing component state
                                 // Importando o hook useState do React para gerenciar o estado do componente
                                 // Importando el hook useState de React para gestionar el estado del componente
                                 // Import des useState-Hooks von React zur Verwaltung des Komponentenstatus
import styles from './solicitacao_ticket.module.css'; // Importing CSS modules for styling
                                                     // Importando módulos CSS para estilização
                                                     // Importando módulos CSS para estilizar
                                                     // Import von CSS-Modulen für das Styling
import axios from 'axios'; // Importing Axios for making HTTP requests
                          // Importando Axios para fazer requisições HTTP
                          // Importando Axios para hacer solicitudes HTTP
                          // Import von Axios zur Durchführung von HTTP-Anfragen

function Solicitacao_ticket() {
  // State variables for form inputs
  // Variáveis de estado para entradas do formulário
  // Variables de estado para las entradas del formulario
  // Zustandsvariablen für Formulareingaben
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [producer, setProducer] = useState('');
  const [requesting, setRequesting] = useState('');

  // Function to create a new user and send data to the server
  // Função para criar um novo usuário e enviar dados para o servidor
  // Función para crear un nuevo usuario y enviar datos al servidor
  // Funktion zum Erstellen eines neuen Benutzers und Senden von Daten an den Server
  const createUser = () => {
    const formData = {
      title: title,
      description: description,
      link: link,
      producer: producer,
      requesting: requesting
    }

    axios.post('http://10.234.84.41:8000/api/v1/powerbis/', formData) // Sending POST request to the specified URL with form data
                                                                     // Enviando requisição POST para a URL especificada com os dados do formulário
                                                                     // Enviando solicitud POST a la URL especificada con los datos del formulario
                                                                     // Senden einer POST-Anfrage an die angegebene URL mit den Formulardaten
  }

  return (

    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Power BI Publication</h1> 
        {/* Power BI Publication title */}
        {/* Título da publicação do Power BI */}
        {/* Título de la publicación de Power BI */}
        {/* Titel der Power BI Veröffentlichung */}

        <form className={styles.form} onSubmit={() => { }}>
          {/* Top group */}
          {/* Grupo superior */}
          {/* Grupo superior */}
          {/* Obere Gruppe */}
          <div className={styles.input_group}>
            <div className={styles.half_width}>
              <p>Title</p> 
              {/* Title field */}
              {/* Campo Título */}
              {/* Campo Título */}
              {/* Titelfeld */}
              <input
                className={styles.input}
                type="text"
                placeholder="Power BI Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className={styles.half_width}>
              <p>Link</p> 
              {/* Link field */}
              {/* Campo Link */}
              {/* Campo Enlace */}
              {/* Linkfeld */}
              <input
                className={styles.input}
                type="text"
                placeholder="Power BI link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>

          {/* Bottom group */}
          {/* Grupo inferior */}
          {/* Grupo inferior */}
          {/* Untere Gruppe */}
          <div className={styles.input_group}>

            <div className={styles.half_width}>
              <p>Producer</p> 
              {/* Producer field */}
              {/* Campo Produtor */}
              {/* Campo Productor */}
              {/* Produzentenfeld */}
              <input
                className={styles.input}
                type="text"
                placeholder="BI Producer"
                value={producer}
                onChange={(e) => setProducer(e.target.value)}
              />
            </div>

            <div className={styles.half_width}>
              <p>Requesting</p> 
              {/* Requesting field */}
              {/* Campo Solicitante */}
              {/* Campo Solicitante */}
              {/* Antragstellerfeld */}
              <input
                className={styles.input}
                type="text"
                placeholder="Requester's name"
                value={requesting}
                onChange={(e) => setRequesting(e.target.value)}
              />
            </div>

          </div>

          {/* Textarea and submit button */}
          {/* Textarea e botão de enviar */}
          {/* Textarea y botón de enviar */}
          {/* Textbereich und Senden-Schaltfläche */}
          <div className={styles.description_project}>
            <p>Bi Description</p> 
            {/* Description field */}
            {/* Campo Descrição */}
            {/* Campo Descripción */}
            {/* Beschreibungsfeld */}
            <textarea
              className={styles.textarea}
              placeholder="Enter a short description of your Power BI"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <input className={styles.button} type="submit" value="Send" onClick={() => createUser()}/> 
          {/* Submit button */}
          {/* Botão de enviar */}
          {/* Botón de enviar */}
          {/* Senden-Schaltfläche */}
        </form>
      </div>
    </div>
  );
}

export default Solicitacao_ticket;
