import styles from './Home.module.css';  // Importing CSS styles for the Home component.
import powerbi from '../../layout/img/powerbi.png';  // Importing the Power BI image.
import Card from '../../layout/Card';  // Importing the Card component.

function Home() {
    // This function defines the Home component.
    
    return (
        <div className={styles.footer}>
        {/* Using CSS class 'footer' from the imported styles. */}
        <div className={styles.content_home}>
        {/* Using CSS class 'content_home' from the imported styles. */}
                <div className={styles.content_page}>
                {/* Using CSS class 'content_page' from the imported styles. */}
               
                    <div className={styles.left_content}>
                    {/* Using CSS class 'left_content' from the imported styles. */}
                        
                        
                    </div>
                    <div className={styles.right_content}>
                    {/* Using CSS class 'right_content' from the imported styles. */}
                      
                    <div className={styles.links}>
                    {/* Using CSS class 'links' from the imported styles. */}
                            <form action="#">
                                    <select name="languages" id="lang">
                                        <option value="All">All</option>
                                        <option value="All">Fixed</option>
                                        <option value="All">Shared</option>
                                        <option value="All">Requested</option>
                                    </select>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                    {/* Loading cards from the Card component */}
                    <div className={styles.cards}>
                    {/* Using CSS class 'cards' from the imported styles. */}
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>  
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>     
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>  
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/> 
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>  
                        <Card image={powerbi} producer="Igor" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Betman" requester="Edilaine" title="Powerbi01"/>
                        <Card image={powerbi} producer="Davi" requester="Edilaine" title="Powerbi01"/>
                        </div>  
                        
                </div>
                    </div>

                      

                </div>
            </div>
    )
}

export default Home;
