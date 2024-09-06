import React, {useRef} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "../styles/Home.module.scss";
import statsStyles from "../styles/Stats.module.scss";
import stepsStyles from "../styles/Steps.module.scss";
import aboutStyles from "../styles/About.module.scss";
import helpStyles from "../styles/Help.module.scss";
import WhomWeHelp from "../components/WhomWeHelp.jsx";

import obrazek1 from "../photos/doggraf.jpeg";
import obrazek2 from "../photos/shirt.svg";
import obrazek3 from "../photos/torba.svg";
import obrazek4 from "../photos/lupa.svg";
import obrazek5 from "../photos/kurier.svg";
import obrazek6 from "../photos/decoration.svg";
import obrazek7 from "../photos/Signature.svg";
import obrazek8 from "../photos/People.jpg";



const Home = () => {

    const navigate = useNavigate();
    const organizationSectionRef = useRef(null);

    const scrollToWhomWeHelp = () => {
        if (organizationSectionRef.current) {
            organizationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMouseEnter = () => {
        console.log("Mouse entered");

    };


    const handleMouseLeave = () => {
        console.log("Mouse left");

    };





        return (

            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.leftContainer}>
                        <div className={styles.logo}>
                            <img src={obrazek1} alt="Logo" className={styles.logoImage}/>
                            <span className={styles.logoText}>Pet the Pet</span>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <section className={styles.section1}>

                            <div className={styles.login}>
                                <button className={styles.buttonLogin} onClick={() => navigate('/logowanie')}>Zaloguj</button>
                            </div>
                            <div className={styles.register}>
                                <button className={styles.buttonRegister} onClick={() => navigate('/rejestracja')}>Zarejestruj</button>
                            </div>

                        </section>
                        <section className={styles.section2}>
                            <nav>
                                <ul className={styles.navList}>
                                    <li><NavLink to="/" className={styles.navItem}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={styles.navItem}>O nas</NavLink></li>
                                    <li><NavLink to="/how-it-works" className={styles.navItem}>Jak to działa?</NavLink>
                                    </li>
                                    <li><button onClick={scrollToWhomWeHelp} className={styles.navItem}>
                                        Organizacje i fundacje
                                    </button>
                                    </li>
                                    <li><NavLink to="/contact" className={styles.navItem}>Kontakt</NavLink></li>
                                </ul>
                            </nav>
                            <div className={styles.hamburger} onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}>
                                &#9776;
                            </div>
                        </section>

                    </div>
                </header>

                <section className={styles.section3}>

                    <div className={styles.section3Text}>

                        <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={obrazek6} alt="dekoracja"/>
                        <div className={styles.section3Buttons}>
                            <button className={styles.button1}>ODDAJ RZECZY</button>
                            <button className={styles.button2}>ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </section>

                <section className={statsStyles.statsContainer}>
                    <div className={statsStyles.stats}>
                        <h2>50 </h2>
                        <p>KG ODDANYCH RZECZY</p>
                    </div>
                    <div className={statsStyles.stats}>
                        <h2>5</h2>
                        <p>WSPARTYCH ORGANIZACJI</p>
                    </div>
                    <div className={statsStyles.stats}>
                        <h2>7</h2>
                        <p>ZORGANIZOWANYCH ZBIÓREK</p>
                    </div>
                </section>

                <section className={stepsStyles.stepsMain}>
                    <h2>Wystarczą 4 proste kroki</h2>

                    <div className={stepsStyles.stepsContainer}>

                        <div className={stepsStyles.step}>
                            <img src={obrazek2} alt="Wybierz rzeczy"/>
                            <p>Wybierz rzeczy</p>
                            <p>karmy, ubrania, zabawki, akcesoria i inne</p>
                        </div>

                        <div className={stepsStyles.step}>
                            <img src={obrazek3} alt="Spakuj je"/>
                            <p>Spakuj je</p>
                            <p>użyj pudeł, kartonów lub worków</p>
                        </div>

                        <div className={stepsStyles.step}>
                            <img src={obrazek4} alt="Zdecyduj komu chcesz pomóc"/>
                            <p>Zdecyduj komu chcesz pomóc</p>
                            <p>Wybierz miejsce/organizację/fundację</p>
                        </div>

                        <div className={stepsStyles.step}>
                            <img src={obrazek5} alt="Zamów kuriera"/>
                            <p>Zamów kuriera</p>
                            <p>Kurier przyjedzie w dogodnym dla Ciebie terminie</p>
                        </div>
                    </div>
                    <button className={stepsStyles.donateButton}>ODDAJ RZECZY</button>

                </section>


                <section className={aboutStyles.aboutContainer}>
                    <div className={aboutStyles.text}>
                        <h2>O nas</h2>
                        <p>aaaaaaaa</p>

                        <div className={aboutStyles.signature}>
                            <img src={obrazek7} alt="Podpis"/>
                        </div>
                    </div>
                    <div className={aboutStyles.aboutImage}>
                        <img src={obrazek8} alt="My"/>
                    </div>
                </section>

                <section ref={organizationSectionRef} className={helpStyles.helpSection}>
                    <WhomWeHelp />
                </section>
                {/*<section className={supportStyles.SupportContainer}>
    <h2>Komu pomagamy</h2>
    <div className={supportStyles.SupportOrgs}>
      <button></button>
      <button></button>
      <button></button>
    </div>

</section>

<section className={styles.ContactContainer}>
    <div className={styles.Form1}>Skontaktuj się z nami</div>
    <form></form>
</section>*/}

                <footer>

                </footer>

            </div>
        );

};
export default Home;