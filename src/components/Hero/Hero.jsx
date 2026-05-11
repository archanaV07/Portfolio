import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, Am Archana Vishwanath
                </h1>
                <p className={styles.description}> Frontend Developer specializing in building scalable, responsive, and user-friendly React applications. Experienced freelancer and trainer with expertise in React, Flutter/Dart, PEGA and soft skills development, passionate about creating impactful digital solutions and empowering others through training and mentorship.

                </p>
                {/* <a href="#contactform"className={styles.contactBtn}> Contact Me</a> */}
            </div>
            <img src={"../assets/hero/heroImage.png"} alt="me" className={styles.heroImg}>
           </img>
            
        </section>
  )
}
export default Hero;