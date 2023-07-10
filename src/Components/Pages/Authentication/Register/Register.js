import './Register.css'
import {Link} from 'react-router-dom'
import logo from '../../../../Assets/Images/logo.svg'
const Register = () => {
    return ( 
        <section className='register'>
            <div className="pageContent">
                <img src={logo} alt ='' className="homeLogo"/>
                <div className="authButton">
                    <Link to={'/staffReg'}>STAFF REG</Link>
                    <Link to={'/studentReg'}>STUDENT REG</Link>
                </div>
                <span>Already have an account? login <Link to={'/'}>here</Link></span>
            </div>
        </section>
    );
}

export default Register;