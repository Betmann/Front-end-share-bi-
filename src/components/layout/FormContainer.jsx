import styles from "./FormContainer.module.css";

/* English: This component renders a form container. */
/* Portuguese: Este componente renderiza um contêiner de formulário. */
/* Spanish: Este componente renderiza un contenedor de formulario. */
/* German: Diese Komponente rendert einen Formularcontainer. */

const FormContainer = () => {

  return (

    /* English: The main section of the form container. */
    /* Portuguese: A seção principal do contêiner de formulário. */
    /* Spanish: La sección principal del contenedor de formulario. */
    /* German: Der Hauptabschnitt des Formularcontainers. */

    <section className={styles.formContainer}>
      <div className={styles.formContainerChild} />

     {/* English: The title area for the question. */
      /* Portuguese: A área de título para a pergunta. */
      /* Spanish: El área del título para la pregunta. */
      /* German: Der Titelbereich für die Frage. */}

      <div className={styles.questionTitleArea}>
        <h2 className={styles.question}>Question</h2>
      </div>

      {/* English: The details area for the question inputs. */
      /* Portuguese: A área de detalhes para os campos de entrada da pergunta. */
      /* Spanish: El área de detalles para las entradas de la pregunta. */
      /* German: Der Detailbereich für die Frageeingaben. */}

      <div className={styles.questionDetails}>
        <div className={styles.questionInputs}>

          {/* English: The subject area including input field and label. */
          /* Portuguese: A área do assunto incluindo o campo de entrada e o rótulo. */
          /* Spanish: El área del asunto, incluido el campo de entrada y la etiqueta. */
          /* German: Der Themenbereich einschließlich Eingabefeld und Etikett. */}

          <div className={styles.subjectArea}>
            <div className={styles.subjectInputArea}>
              <div className={styles.subject}>Subject</div>
              <div className={styles.subjectPlaceholder}>
                <div className={styles.subjectPlaceholderChild} />
                <input
                  className={styles.enterTheSubject}
                  placeholder="Enter the subject of the change...."
                  type="text"
                />
              </div>
            </div>
          </div>
          
        { /* English: The date area including input field and label. */
          /* Portuguese: A área de data incluindo o campo de entrada e o rótulo. */
          /* Spanish: El área de fecha, incluido el campo de entrada y la etiqueta. */
          /* German: Der Datumsbereich einschließlich Eingabefeld und Etikett. */}

          <div className={styles.dateArea}>
            <div className={styles.dateOfTheQuestion}>Date of the question</div>
            <div className={styles.dateInputArea}>
              <div className={styles.dateInputAreaChild} />
              <div className={styles.subjectPlaceholderChild} />
              <input
                className={styles.enterTheSubject}
                type="date"
              />
            </div>
          </div>
        </div>
        <div className={styles.descriptionArea}>
          <div className={styles.descriptionOfThequestion}>Description of the question</div>
        </div>

        {/* English: The observations area with placeholder text. */
        /* Portuguese: A área de observações com texto de espaço reservado. */
        /* Spanish: El área de observaciones con texto de marcador de posición. */
        /* German: Der Beobachtungsbereich mit Platzhaltertext. */}

        <div className={styles.observations}>
          <div className={styles.observationsChild} />
          <div className={styles.Insertproperly}>
            <input
              className={styles.enterTheSubject}
              placeholder="  Insert in detail what you want to understand..."
              type="text"
            />
          </div>
        </div>
      </div>

      {/* English: The button area containing a button with label. */
      /* Portuguese: A área do botão contendo um botão com rótulo. */
      /* Spanish: El área del botón que contiene un botón con etiqueta. */
      /* German: Der Button-Bereich mit einem Button mit Beschriftung. */}

      <div className={styles.buttonArea}>
        <button className={styles.buttonText}>
          <div className={styles.label}>Ask</div>
        </button>
      </div>
    </section>
  );
};

export default FormContainer;
