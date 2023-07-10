import React from "react";
const StudentRegContext = React.createContext({
    formData: {},
    formErrors:{},
    handleChange: ()=>{},
    handleSubmit: ()=>{}
})
export default StudentRegContext