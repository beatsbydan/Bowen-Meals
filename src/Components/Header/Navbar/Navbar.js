import logo from '../../../Assets/Images/logo.svg'
import basket from '../../../Assets/Icons/basket.svg'
import person from '../../../Assets/Icons/person.svg'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import {CgClose} from 'react-icons/cg'
import {useRef} from 'react';
import { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import NavContext from '../../../Contexts/NavContext/NavContext'
import MealContext from '../../../Contexts/MealContext/MealContext'
const Navbar = () => {
    const navRef = useRef()
    const ctx = useContext(NavContext)
    const cartCtx = useContext(MealContext)
    const handleCafs = (value) =>{
        ctx.handleCafeterias(value, navRef)
    }
    return ( 
        <nav className='nav'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='navBlock' ref={navRef}>
                <div className="mainNav">
                    <ul className='myNav'>
                        <Link onClick={()=>ctx.handleExit(navRef)} to={'/'}><li className='home'>Home</li></Link>
                        <li onClick={()=>ctx.handleNav(navRef)} className='aboutUs'>How it works</li>
                        <div className='cafDropdownBlock'>
                            <div className='cafDropdown' onClick={ctx.handleDropDown}>
                                <li className='navCafs'>Cafeterias</li>
                                {!ctx.shown ? <MdKeyboardArrowDown color='black' size={20}/> : <MdKeyboardArrowUp color='black' size={20}/>}
                            </div>
                            {<div className={ctx.shown?'menuSelect selected':'menuSelect'}>
                                <ul>
                                    <Link onClick={()=>handleCafs('BBSF')} to={'/bbsf'}><li>BBSF</li></Link>
                                    <Link onClick={()=>handleCafs('Jubilee')} to={'/jubilee'}><li>Jubilee</li></Link>
                                    <Link onClick={()=>handleCafs('Y2k')} to={'/y2k'}><li>Y2k</li></Link>
                                    <Link onClick={()=>handleCafs('Buwa')} to={'/buwa'}><li>Buwa</li></Link>
                                    <Link onClick={()=>handleCafs('Blessed')} to={'/blessed'}><li>Blessed</li></Link>
                                    <Link onClick={()=>handleCafs('Divine')} to={'/divine'}><li>Divine</li></Link>
                                    <Link onClick={()=>handleCafs('KEMIBEE')} to={'/kemibee'}><li>KEMIBEE</li></Link>
                                    <Link onClick={()=>handleCafs('Glory')} to={'/glory'}><li>Glory</li></Link>
                                    <Link onClick={()=>handleCafs('Sumptuous')} to={'/sumptuous'}><li>Sumptuous</li></Link>
                                    <Link onClick={()=>handleCafs('Forza')} to={'/forza'}><li>Forza</li></Link>
                                </ul>
                            </div>}
                        </div>
                    </ul>
                </div>
            </div>
            <div className="rightBlock">
                <div className="cart">
                    {cartCtx.cartSize > 0 &&<div className="indicator">{cartCtx.cartSize}</div>}
                    <Link to={'/cart'}><img src={basket} alt="" /></Link>
                </div>
                {<img src={person} alt=""/>}
            </div>
            {!ctx.navOpen ? <RxHamburgerMenu className='mobile' size={27 } color='black' cursor='pointer' onClick={()=>ctx.handleNav(navRef)} /> : <CgClose size={27} className='mobile static' color='black' cursor='pointer' onClick={()=>ctx.handleNav(navRef)} />}
        </nav>
    );
}

export default Navbar;