import styles from "./Home.scss";


const Home = () = {

    return (

        <div className={styles.container}>
            <header>
                <section className={styles.section1}>
                <div className={styles.logo}>
                    <img src={obrazek1} alt="Logo" className={styles.logoImage}/>
                    <span className={styles.logoText}>Org name</span>
                </div>
                <div className={styles.login}>
                     <button></button>
                </div>
                <div className={styles.register}>
                    <button></button>
                </div>
                </section>
                <section className={styles.section2}>
                    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li><NavLink to="/" className={styles.navItem}>Home</NavLink></li>
                        <li><NavLink to="/about" className={styles.navItem}>O nas</NavLink></li>
                        <li><NavLink to="/how-it-works" className={styles.navItem}>Jak to działa?</NavLink></li>
                        <li><NavLink to="/organizations" className={styles.navItem}>Organizacje i fundacje</NavLink></li>
                        <li><NavLink to="/contact" className={styles.navItem}>Kontakt</NavLink></li>
                    </ul>
                    </nav>
                    <div className={styles.hamburger} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        &#9776;
                    </div>
                </section>
            </header>





        </div>


    )

}