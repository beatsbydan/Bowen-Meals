import ValidateStudentLogin from "../../../Components/Pages/Authentication/StudentLogin/ValidateStudentLogin";
import StudentLoginContext from "./StudentLoginContext";
import { useState } from "react";
import axios from 'axios'
const StudentLoginContextProvider = (props) => {
    const studentLoginApi = 'https://odukz-backend-p4f2.onrender.com/student/student-login'
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
        const myErrors = ValidateStudentLogin(formData)
        setFormErrors(myErrors)
        if(myErrors.all === ""){
            await axios.post(studentLoginApi,{...formData},{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{
                if(res.status === 200){
                    const user = {
                        isLoggedIn:true,
                        userType: 'student',
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    alert('Login Successful!')
                    success.formSuccess = true
                    setFormData({
                        userId:'',
                        password:''
                    })
                }
            })
            .catch(err=>{
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
        <StudentLoginContext.Provider value={updatedContext}>
            {props.children}
        </StudentLoginContext.Provider>
    );
}
export default StudentLoginContextProvider;