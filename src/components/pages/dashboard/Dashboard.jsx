import styles from "./Dashboard.module.css"; // Importing CSS module for styling the Dashboard component.

// Defining the Dashboard component.
const Dashboard = () => {
  return (
    <div className={styles.ticketPageV3}> {/* Main container with a class for styling */}
      {/* Main content area */}
      <div className={styles.mainContent}>
        <div className={styles.dashboardCappt}>Dashboard Cap/PT</div> {/* Title or header section */}
        <div className={styles.formArea} /> {/* Area reserved for form elements */}
        
        {/* Button for requesting an edit */}
        <div className={styles.buttonText}>
          <div className={styles.label}>Request editing</div>
        </div>
      </div>
      
      {/* Sidebar for tickets */}
      <div className={styles.sidebar}>
        <div className={styles.tickets}>Tickets</div> {/* Sub-header for tickets section */}
        
        {/* First ticket card */}
        <div className={styles.cardTicketUnity}>
          <div className={styles.cardTicketUnityChild} /> {/* Child div for card styling */}
          <div className={styles.div}>09/08/24 11:41</div> {/* Date and time of the ticket */}
          <div className={styles.loremIpsumPipip}>
            Lorem ipsum pipip popopo vala pipip popopo vala d lskkk olote olodum
            hajib desco elo trant lobj oemfk, Lorem ipsum pipip popopo vala pipip
            popopo
          </div> {/* Placeholder text or ticket description */}
          <div className={styles.daviLimaPtcvoLa}>TICKET</div> {/* Ticket label or title */}
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} /> {/* Child div for additional layout or styling */}
            <div className={styles.ready}>Ready</div> {/* Status label */}
            <img
              className={styles.checkmarkBoldIcon}
              alt=""
              src="/checkmarkbold.svg"
            /> {/* Checkmark icon */}
          </div>
        </div>
        
        {/* Second ticket card */}
        <div className={styles.cardTicketUnity1}>
          <div className={styles.cardTicketUnityChild} />
          <div className={styles.div}>09/08/24 11:41</div>
          <div className={styles.loremIpsumPipip}>
            Lorem ipsum pipip popopo vala pipip popopo vala d lskkk olote olodum
            hajib desco elo trant lobj oemfk, Lorem ipsum pipip popopo vala pipip
            popopo
          </div>
          <div className={styles.daviLimaPtcvoLa}>Davi Lima, PT/CVO-LA</div> {/* Author or creator of the ticket */}
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.ready}>Ready</div>
            <img
              className={styles.checkmarkBoldIcon}
              alt=""
              src="/checkmarkbold.svg"
            />
          </div>
        </div>
        
        {/* Third ticket card */}
        <div className={styles.cardTicketUnity2}>
          <div className={styles.cardTicketUnityChild} />
          <div className={styles.div}>09/08/24 11:41</div>
          <div className={styles.loremIpsumPipip}>
            Lorem ipsum pipip popopo vala pipip popopo vala d lskkk olote olodum
            hajib desco elo trant lobj oemfk, Lorem ipsum pipip popopo vala pipip
            popopo
          </div>
          <div className={styles.daviLimaPtcvoLa}>Davi Lima, PT/CVO-LA</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.ready}>Ready</div>
            <img
              className={styles.checkmarkBoldIcon}
              alt=""
              src="/checkmarkbold.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Exporting the Dashboard component to be used in other parts of the application.
