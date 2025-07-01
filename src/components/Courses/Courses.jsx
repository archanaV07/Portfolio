import React, { PureComponent } from 'react';
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <>
        <section className = {styles.container} id="about">
            <h2 className = {styles.title}> Certification Courses </h2>
            <div className={styles.content}>
             <img  src={"../assets/courses/course.png"} alt="me working" className = {styles.aboutImage}/>
            </div>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src ={"../assets/about/cursorIcon.png"}/>
                    <div className = {styles.aboutItemText}>
                        <h3>“React with Styled Components” by Julia Dyck!:  </h3>
                          <a href="https://www.linkedin.com/learning/certificates/b2de4ab5a926c5a8197684e28fdc93ee9559a3e01cc0410bb431765aaf865519?trk=share_certificate #reactjs./">Click Me to view the Certification Link</a>
                    </div>
                    
                                      
                </li>
            </ul>
        </section>
        </>
  )
}

export default Courses;
