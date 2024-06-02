import React from "react";
import FormContainer from "../../layout/FormContainer"; // Importing the FormContainer component
import styles from "./Pergunta.module.css"; // Importing CSS styles specific to the Pergunta component

const Question = () => {
  return (
    <div className={styles.Question}> {/* Adding a div with a specific CSS class */}
      <main className={styles.QuestionForm}> {/* Adding a main element with a specific CSS class */}
        <FormContainer /> {/* Rendering the FormContainer component */}
      </main>
    </div>
  );
};

export default Question; // Exporting the Pergunta component as the default export
