import React from "react";
const StudentLoginContext = React.createContext({
    formData: {},
    formErrors:{},
    handleChange: ()=>{},
    handleSubmit: ()=>{}
})
export default StudentLoginContext