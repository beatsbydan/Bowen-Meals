import { useContext } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import './Payment.css'
import PaymentContext from "../../../Contexts/PaymentContext/PaymentContext";
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const ctx = useContext(PaymentContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = ctx.handleSubmit()
        if(res.formSuccess){
            navigate('/success')
        }
    }
    return ( 
        <section>
            <Navbar/>
            <div className="mySubmission">
                <form action="" className="mySubmissionForm" onSubmit={handleSubmit}>
                    <div className="crossInput">
                        <small className="error">{ctx.formErrors.file}</small>
                        <div className="cross">
                            <input type="file" className='customFileInput' onChange={ctx.handleFileChange} />
                        </div>
                        <h3>UPLOAD FILE HERE</h3>
                    </div>
                    <div className="formElement">
                        <label htmlFor="">
                            Location
                            <small className="error">{ctx.formErrors.location}</small>
                        </label>
                        <input type="text" className={ctx.formErrors.location?"errorField":""} value={ctx.location} onChange={ctx.handleChange} placeholder="Location" />
                    </div>
                    <div className="formActions">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>

            </div>
        </section>
    );
}
export default Payment;