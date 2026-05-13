import skills from "../../data/skills";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <>
    <section className = {styles.container} id='experience'>
        <h2 className = {styles.title} >Experience</h2>
        <div className = {styles.content}>
            
            <div className={styles.skillsCard}>
              <h3 className={styles.cardTitle}>Skills</h3>
              <div className = {styles.skills} >{
                skills.map((skill, id) => {
                    return (
                        <div key={id} className = {styles.skill}>
                            <div className = {styles.skillImageContainer}>                        
                                <img 
                                src={`/${skill.imageSrc}`}
                                alt={skill.title} />
                            </div>
                            <p className = {styles.p} >{skill.title}</p>
                        </div>
                    );
             })}
              </div>
            </div>

            <div className={styles.historyCard}>
              <h3 className={styles.cardTitle}>Work Experience</h3>
              <ul className = {styles.history}>
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className = {styles.historyItem}>
                             <div className = {styles.historyItemDetails}>
                             <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>
                        {historyItem.experiences.map((experience, id) => {
                          return <li key={id}>{experience}</li>;
                        })}
                      </ul>
                    </div>
                        </li>
                       
                    })
                }
              </ul>
            </div>

       </div>
    </section>
  </>  
  )
}

export default Experience;
