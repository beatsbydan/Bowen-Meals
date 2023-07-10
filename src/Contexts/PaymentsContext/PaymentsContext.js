import React from "react";

const PaymentsContext = React.createContext({
    file: '',
    location: '',
    formErrors: {},
    handleChange: ()=>{},
    handleFileChange: ()=>{},
    handleSubmit: ()=>{}
})
export default PaymentsContext