// import DummyDataBase from "../DummyDataBase"

const ValidateStudentLogin = (entry) => {
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
        // for(let data of DummyDataBase){
        //     console.log(data)
        //     if(entry.userId === data.id && entry.password === data.password){
        //         errors.all = ""
        //         errors.res = ""
        //     }
        //     else{
        //         errors.res = "Invalid Credentials"
        //     }
        //     if(entry.userId === data.id && entry.password !== data.password){
        //         errors.res = "Invalid Credentials"
        //     }
        //     if(entry.userId !== data.id && entry.password === data.password){
        //         errors.res = "Invalid Credentials"
        //     }
        // }
    }
    return errors;
}

export default ValidateStudentLogin;