import React from "react";
const StaffRegContext = React.createContext({
    formData: {},
    formErrors:{},
    handleChange: ()=>{},
    handleSubmit: ()=>{}
})
export default StaffRegContext