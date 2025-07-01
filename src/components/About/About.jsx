import React, { PureComponent } from 'react';
import styles from "./About.module.css"; 

const About = () => {
 return(
    <>
    <section className = {styles.container} id="about">
        <h2 className = {styles.title}> About </h2>
        <div className={styles.content}>
         <img  src={"../assets/about/aboutImage.png"} alt="me working" className = {styles.aboutImage}/>
        </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src ={"../assets/about/cursorIcon.png"}/>
                <div className = {styles.aboutItemText}>
                    <h3> Frontend Developer  </h3>
                    <p>
                        I am a frontend developer with 1 year of experience to build responsive and optimized website. 
                    </p>
                </div>
            </li>
        </ul>
    </section>
    </>
 )
}

export default About;