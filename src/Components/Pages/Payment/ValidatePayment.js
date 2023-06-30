const ValidatePayment = (entry) => {
    let errors = {}
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i

    if(entry.location === ""){
        errors.location = "Location cannot be empty"
    }
    if(!allowedExtensions.exec(entry.file)){
        alert('File type should only be .jpg, .jpeg, .pdf or .png')
        errors.file = "Invalid file type"
    }
    if(entry.location !== "" && allowedExtensions.exec(entry.file)){
        errors.all = ""
    }
    return errors;
}
export default ValidatePayment;