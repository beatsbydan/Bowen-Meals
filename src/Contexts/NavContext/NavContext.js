import React from "react";
const NavContext = React.createContext({
    caf: '',
    shown: false,
    navOpen: false,
    handleCafeterias: ()=>{},
    handleDropDown: ()=>{},
    handleNav: ()=>{},
    handleExit: ()=>{}
})
export default NavContext