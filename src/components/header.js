import { NavLink,useSearchParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
    const [toggled, setToggled] = useState(false);
    const navRef = useRef();
    const [change, setChange] = useState(false);

    const handleClick = () => {
        setToggled(!toggled)

    }

    const showNavbar = () => {
        setToggled(!toggled)
    }


// useEffect(()=>{
//     let url = window.location.toString();
//     window.history.replaceState('', '', url.replace('http://localhost:3000/#/', 'http://localhost:3000/'));
//     console.log('url '+ url)
//     if(change === true && url === "http://localhost:3000/Resume#/Resume"){
//         setChange(!change)
//     window.history.replaceState('', '', url.replace('http://localhost:3000/Resume#/Resume', 'http://localhost:3000/'));
     

// window.location.reload()

//     }
// },[change])


    // window.history.pushState('', '', '/');
  
   
    return (
        <header className={styles.headerContaqiner}>
            <nav ref={navRef} className={toggled ? styles.responsive_nav : ""}>
                <NavLink to={'/'} className={({ isActive }) => (isActive ? `${styles.active} ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false); setChange(true)}}>
                    Home
                </NavLink>

                <NavLink to={'/Resume'} replace={true} className={({ isActive }) => (isActive ? `${styles.active}  ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false);setChange(true)}}>
                    Resume
                </NavLink>

                <NavLink to={"/Projects"} className={({ isActive }) => (isActive ? `${styles.active}  ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false) }}>
                    Projects
                </NavLink>
                <NavLink to={"/Contact"} className={({ isActive }) => (isActive ? `${styles.active}  ${styles.navItem}` : `${styles.navItem}`)} onClick={() => { handleClick(); setToggled(false) }}>
                    Contact
                </NavLink>

                <button className={`${styles.nav_btn} ${styles.nav_close_btn}`} onClick={showNavbar}>
                    <FaTimes className={styles.faTimes} />
                </button>
            </nav>
            <button className={styles.nav_btn} onClick={showNavbar}>
                <FaBars className={styles.faBars} />
            </button>
        </header>
    )
}

export default Header