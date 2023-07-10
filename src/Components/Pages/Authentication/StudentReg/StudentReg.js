import logo from '../../../../Assets/Images/logo.svg'
import StudentRegContext from '../../../../Contexts/AuthContext/StudentRegContext/StudentRegContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const StudentReg = () => {
    const ctx = useContext(StudentRegContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        ctx.handleSubmit().then(result=>{
            if(result.formSuccess){
                navigate('/login')
            }
        })
    }
    return ( 
        <section>
            <div className="myForm studentForm reg">
                <form action="">
                    <img src={logo} alt ='' className="formLogo"/>
                    <h3>STUDENT</h3>
                    <div className="formElement">
                        <label htmlFor="">
                            User-ID
                            <small className='error'>{ctx.formErrors.user || ctx.formErrors.res}</small>
                        </label>
                        <input className={ctx.formErrors.user ? 'errorField' : ''} type="text" placeholder='User ID' name='userId' value={ctx.formData.userId} onChange={ctx.handleChange} />
                    </div>
                    <div className="formElement">
                        <label htmlFor="">
                            Password
                            <small className='error'>{ctx.formErrors.password}</small>
                        </label>
                        <input className={ctx.formErrors.password ? 'errorField' : ''} type="password" placeholder='Password' name='password' value={ctx.formData.password} onChange={ctx.handleChange} />
                    </div>
                    <div className="formActions">
                        <button type='buttton' onClick={handleSubmit}>REGISTER</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default StudentReg;