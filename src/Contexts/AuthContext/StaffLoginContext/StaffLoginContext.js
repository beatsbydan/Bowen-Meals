import React from "react";
const StaffLoginContext = React.createContext({
    formData: {},
    formErrors: {},
    handleChange: ()=>{},
    handleSubmit: ()=>{}
})
export default StaffLoginContext