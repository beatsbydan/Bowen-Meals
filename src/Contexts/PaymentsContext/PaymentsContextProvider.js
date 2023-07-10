import { useState, useEffect, useContext } from "react";
import PaymentContext from "./PaymentsContext";
import MealContext from "../MealContext/MealContext";
import ValidatePayment from "../../Components/Pages/Payment/ValidatePayment";
import axios from 'axios'

const PaymentsContextProvider = (props) => {
    const mealCtx = useContext(MealContext)
    const [user, setUser] = useState({})
    const getLocalStorage = () => {
        const userInfo = JSON.parse(localStorage.getItem('user'))
        if(!userInfo){
            return
        }
        else{
            setUser({...userInfo})
        }
    }
    useEffect(()=>{
        getLocalStorage()
    },[])
    const orderApi = user.userType === 'staff' ? 'https://odukz-backend-p4f2.onrender.com/orders/staff-order' : 'https://odukz-backend-p4f2.onrender.com/orders/student-order'
    const [file, setFile] = useState('')
    const [location, setLocation] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const handleChange = (e) => {
        setLocation(e.target.value)
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleSubmit = async () => {
        let success = {}
        const formData = {
            file: file.name,
            location:location
        }
        const orderData = {
            location: location,
            receipt: file,
            order: [...mealCtx.cartItems],
            totalPrice: mealCtx.totalPrice,
            cafetariaNumber: '08140562021'
        }
        const formErrors = ValidatePayment(formData)
        setFormErrors(formErrors)
        if(formErrors.all === ""){
            await axios.post(orderApi, {...orderData},{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{
                if(res.status === 201){
                    success.formSuccess = true
                    setFile('')
                    setLocation('')
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
export default PaymentsContextProvider;