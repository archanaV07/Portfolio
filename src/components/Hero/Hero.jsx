import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, Am Archana Vishwanath
                </h1>
                <p className={styles.description}> Am a Frontend developer with 1 year of experience.</p>
                <a href="archanavishwanath06@gmail.com"className={styles.contactBtn}> Contact Me</a>
            </div>
            <img src={"../assets/hero/heroImage.png"} alt="me" className={styles.heroImg}>
           </img>
            
        </section>
  )
}
export default Hero;
