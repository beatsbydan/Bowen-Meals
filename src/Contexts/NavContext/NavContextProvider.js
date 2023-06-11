import NavContext from "./NavContext";
import { useState } from "react";
const NavContextProvider = (props) => {
    const [caf, setCaf] = useState('')
    const [shown, setShown] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const handleCafeterias = (value, ref) =>{
        localStorage.setItem('currCaf', value)
        setCaf(value)
        setShown(false)
        setNavOpen(false)
        ref.current.classList.remove('responsive_nav')
    }
    const handleExit = (ref) =>{
        setNavOpen(false)
        setShown(false)
        ref.current.classList.remove('responsive_nav')
    }
    const handleDropDown = () => {
        setShown(!shown)
    }
    const handleNav = (ref) => {
        setNavOpen(!navOpen)
        ref.current.classList.toggle('responsive_nav')
    }
    const updatedContext = {
        navOpen: navOpen,
        shown: shown,
        caf: caf,
        handleDropDown: handleDropDown,
        handleNav: handleNav,
        handleCafeterias: handleCafeterias,
        handleExit: handleExit
    }
    return ( 
        <NavContext.Provider value={updatedContext}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavContextProvider;