import { useContext } from 'react';
import './StaffLogin.css'
import StaffLoginContext from '../../../../Contexts/AuthContext/StaffLoginContext/StaffLoginContext';
import { useNavigate } from 'react-router-dom';
const StaffLogin = () => {
    const ctx = useContext(StaffLoginContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = ctx.handleSubmit()
        if(res.formSuccess){
            navigate('/dashboard')
        }
    }
    return ( 
        <section>
            <div className="myForm staffForm">
                <form action="#">
                    <h3>STAFF</h3>
                    <div className="formElement">
                        <label htmlFor="">
                            User-ID
                            <small className='error'>{ctx.formErrors.user}</small>
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
                        <button onClick={handleSubmit} type='buttton'>LOGIN</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default StaffLogin;