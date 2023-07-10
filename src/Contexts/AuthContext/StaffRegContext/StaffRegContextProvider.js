import axios from "axios";
import ValidateStaffReg from "../../../Components/Pages/Authentication/StaffReg/ValidateStaffReg";
import StaffRegContext from "./StaffRegContext";
import { useState } from "react";
const StaffRegContextProvider = (props) => {
    const staffRegApi = 'https://odukz-backend-p4f2.onrender.com/staff/staff-register'
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
        const myErrors = ValidateStaffReg(formData)
        setFormErrors(myErrors)
        if(myErrors.all === ""){
            await axios.post(staffRegApi,{...formData},{
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
        <StaffRegContext.Provider value={updatedContext}>
            {props.children}
        </StaffRegContext.Provider>
    );
}
export default StaffRegContextProvider;