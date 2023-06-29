import ValidateStudentLogin from "../../../Components/Pages/Authentication/StudentLogin/ValidateStudentLogin";
import StudentLoginContext from "./StudentLoginContext";
import { useState } from "react";
const StudentLoginContextProvider = (props) => {
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
        const myErrors = ValidateStudentLogin(formData)
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
        <StudentLoginContext.Provider value={updatedContext}>
            {props.children}
        </StudentLoginContext.Provider>
    );
}
export default StudentLoginContextProvider;