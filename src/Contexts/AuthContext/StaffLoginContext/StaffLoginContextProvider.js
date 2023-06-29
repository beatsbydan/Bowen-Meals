import ValidateStaffLogin from "../../../Components/Pages/Authentication/StaffLogin/ValidateStaffLogin";
import StaffLoginContext from "./StaffLoginContext";
import { useState } from "react";
const StaffLoginContextProvider = (props) => {
    const [formData,setFormData] = useState({
        userId: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prev=>{
            return {...prev, [name]:value}
        })
    }
    const handleSubmit = () => {
        let success = {}
        const myErrors = ValidateStaffLogin(formData)
        setFormErrors(myErrors)
        if(myErrors.all === ""){
            success.formSuccess = true
            setFormData({
                userId:'',
                password:''
            })
        }
        else{
            success.formSuccess = false
        }
        return success
    }
    const updatedContext = {
        formData: formData,
        formErrors:formErrors,
        handleChange:handleChange,
        handleSubmit:handleSubmit
    }
    return ( 
        <StaffLoginContext.Provider value={updatedContext}>
            {props.children}
        </StaffLoginContext.Provider>
    );
}
export default StaffLoginContextProvider;