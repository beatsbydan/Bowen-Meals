const ValidateStaffLogin = (entry) => {
    let errors = {}
    if(entry.userId === ""){
        errors.user = 'ID cannot be empty'
    }
    if(entry.password === ""){
        errors.password = 'Password cannot be empty'
    }
    if(Object.values(entry).every(field=>{
        return field !== ''
    })){
        errors.all = ""
    }
    return errors
}
 
export default ValidateStaffLogin;