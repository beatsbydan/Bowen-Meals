import React from "react";

const PaymentContext = React.createContext({
    file: '',
    location: '',
    formErrors: {},
    handleChange: ()=>{},
    handleFileChange: ()=>{},
    handleSubmit: ()=>{}
})
export default PaymentContext