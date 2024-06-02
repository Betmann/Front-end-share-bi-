//This code is a React functional component named PreenchimentoDeTicket that creates a form for filling out ticket information. 
//It uses React's useState hook to manage form data and updates. The form includes fields for the responsible manager, database a
//dministrator, base origin, date of use, project participants, and project description. Users can input data into these fields,
//and the form includes a submit button to send the form data. When submitted, the form data is logged to the console.

//Este código é um componente funcional React chamado PreenchimentoDeTicket que cria um formulário para preenchimento de informações 
//de ticket. Ele utiliza o hook useState do React para gerenciar os dados e atualizações do formulário. O formulário inclui campos para o 
//gestor responsável, administrador de banco de dados, origem da base, data de utilização, participantes do projeto e descrição do projeto. 
//Os usuários podem inserir dados nesses campos, e o formulário inclui um botão de envio para enviar os dados do formulário. 
//Quando enviado, os dados do formulário são registrados no console.

//Este código es un componente funcional de React llamado PreenchimentoDeTicket que crea un formulario para completar información de tickets. 
//Utiliza el hook useState de React para gestionar los datos del formulario y sus actualizaciones. El formulario incluye campos para el gestor
//responsable, administrador de la base de datos, origen de la base, fecha de uso, participantes del proyecto y descripción del proyecto. Los 
//usuarios pueden ingresar datos en estos campos, y el formulario incluye un botón de envío para enviar los datos del formulario. Cuando se 
//envía, los datos del formulario se registran en la consola.

//Dieser Code ist eine funktionale React-Komponente namens PreenchimentoDeTicket, die ein Formular zur Eingabe von Ticketinformationen erstellt. 
//Sie verwendet den useState-Hook von React, um Formulardaten und Aktualisierungen zu verwalten. Das Formular enthält Felder für den verantwortli
//chen Manager, den Datenbankadministrator, die Herkunft der Datenbank, das Nutzungsdatum, die Projektteilnehmer und die Projektbeschreibung. Benut
//zer können Daten in diese Felder eingeben,und das Formular enthält eine Schaltfläche zum Absenden, um die Formulardaten zu senden. Beim Absenden 
//werden die Formulardaten in der Konsole protokolliert.

import React, { useState } from "react";
import styles from "./Preenchimento.module.css";

const PreenchimentoDeTicket = () => {
  const [formData, setFormData] = useState({
    managerResponsible: "",
    responsibledatabase: "",
    originBase: "",
    dataUse: "",
    participantsProject: "",
    descriptionProject: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className={styles.highFidelityPrototypeForms}>
      <section className={styles.highFidelityPrototypeFormsInner}>
        <form className={styles.frameParent} onSubmit={handleSubmit}>
          <div className={styles.preenchimentoDeTicketWrapper}>
            <div className={styles.preenchimentoDeTicket}>
                Ticket Filling
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Responsible manager
              <input
                className={styles.inputField}
                type="text"
                name="managerResponsible"
                value={formData.managerResponsible}
                onChange={handleChange}
                placeholder="Responsible manager"
              />
            </label>

            <label className={styles.label}>
              Responsible for the database
              <input
                className={styles.inputField}
                type="text"
                name="responsibledatabase"
                value={formData.responsibledatabase}
                onChange={handleChange}
                placeholder="Responsible for the database "
              />
            </label>

            <label className={styles.label}>
              Origin of the base
              <input
                className={styles.inputField}
                type="text"
                name="originBase"
                value={formData.originBase}
                onChange={handleChange}
                placeholder="Origin of the base"
              />
            </label>

            <label className={styles.label}>
               Date of use
              <input
                className={styles.inputField}
                type="date"
                name="dataUse"
                value={formData.dataUse}
                onChange={handleChange}
              />
            </label>

            <label className={styles.label}>
              Project Participants
              <input
                className={styles.inputField}
                type="text"
                name="participantsProject"
                value={formData.participantsProject}
                onChange={handleChange}
                placeholder="Project Participants"
              />
            </label>

            <label className={styles.label}>
              Project Description
              <textarea
                className={styles.inputField}
                name="descriptionProject"
                value={formData.descriptionProject}
                onChange={handleChange}
                placeholder="Project Description"
                rows={5}
              />
            </label>
          </div>

          <div className={styles.buttonTextWrapper}>
            <button type="submit" className={styles.buttonText}>
              <div className={styles.label}>Send</div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PreenchimentoDeTicket;
