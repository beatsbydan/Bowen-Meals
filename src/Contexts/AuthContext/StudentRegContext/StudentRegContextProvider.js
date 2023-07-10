import axios from "axios";
import ValidateStudentReg from "../../../Components/Pages/Authentication/StudentReg/ValidateStudentReg";
import StudentRegContext from "./StudentRegContext";
import { useState } from "react";
const StudentRegContextProvider = (props) => {
    const studentRegApi = 'https://odukz-backend-p4f2.onrender.com/student/student-register'
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
    const handleSubmit = async () => {
        let success = {}
        const myErrors = ValidateStudentReg(formData)
        setFormErrors(myErrors)
        if(myErrors.all === ""){
            await axios.post(studentRegApi, {...formData}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{
                if(res.status === 200){
                    alert('Registeration successful!')
                    success.formSuccess = true
                    setFormData({
                        userId:'',
                        password:''
                    })
                }
            })
            .catch(err=>{
                if(err.response.status === 404){
                    alert(err.response.data.message)
                }
                return
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
        <StudentRegContext.Provider value={updatedContext}>
            {props.children}
        </StudentRegContext.Provider>
    );
}
export default StudentRegContextProvider;