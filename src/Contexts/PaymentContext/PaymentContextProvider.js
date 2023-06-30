import { useState } from "react";
import PaymentContext from "./PaymentContext";
import ValidatePayment from "../../Components/Pages/Payment/ValidatePayment";

const PaymentContextProvider = (props) => {
    const [file, setFile] = useState('')
    const [location, setLocation] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const handleChange = (e) => {
        setLocation(e.target.value)
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleSubmit = () => {
        let success = {}
        const formData = {
            file: file.name,
            location: location
        }
        const formErrors = ValidatePayment(formData)
        setFormErrors(formErrors)
        if(formErrors.all === ""){
            success.formSuccess = true
            setFile('')
            setLocation('')
        }
        else{
            success.formSuccess = false
        }
        return success
    }
    const updatedContext = {
        file: file,
        location: location,
        formErrors: formErrors,
        handleChange: handleChange,
        handleFileChange: handleFileChange,
        handleSubmit: handleSubmit,
    }
    return ( 
        <PaymentContext.Provider value={updatedContext}>
            {props.children}
        </PaymentContext.Provider>
    );
}
export default PaymentContextProvider;