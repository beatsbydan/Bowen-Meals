import ValidateStaffLogin from "../../../Components/Pages/Authentication/StaffLogin/ValidateStaffLogin";
import StaffLoginContext from "./StaffLoginContext";
import axios from 'axios'
import { useState } from "react";
const StaffLoginContextProvider = (props) => {
    const staffLoginApi = 'https://odukz-backend-p4f2.onrender.com/staff/staff-login'
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
        const myErrors = ValidateStaffLogin(formData)
        setFormErrors(myErrors)
        if(myErrors.all === ""){
            await axios.post(staffLoginApi, {...formData}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{
                if(res.status === 200){
                    const user = {
                        isLoggedIn:true,
                        userType: 'staff',
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    success.formSuccess = true
                    alert('Login Successful!')
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
        <StaffLoginContext.Provider value={updatedContext}>
            {props.children}
        </StaffLoginContext.Provider>
    );
}
export default StaffLoginContextProvider;