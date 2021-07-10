let validate = () => {
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let cpassword = document.getElementById('cpassword')
    let dob = document.getElementById('dob')
    let nationality = document.getElementById('nationality')
    let agree = document.getElementById('agreement')
    let errorMsg = []

    //Validasi
    validateEmail(email,errorMsg)
    validateUsername(username,errorMsg)
    validatePassword(password,errorMsg)
    validateCpassword(cpassword, errorMsg,password)
    validateDob(dob,errorMsg)
    validateNationality(nationality,errorMsg)
    validateAgreement(agree,errorMsg)

    if(errorMsg.length === 0){
        alert('Registration Success !')
    }
    else{
        alert(errorMsg.join('\n'))
    }
}

let validateEmail = (email,errorMsg) =>{
    if(email.value === ""){
        errorMsg.push('Email Required')
    }

    else if(email.value.startsWith('.') || email.value.startsWith('@')) {
        errorMsg.push('Email cannot start with . or @')
    }
    else if(email.value.indexOf('.') === (email.value.indexOf('@') + 1)){
    errorMsg.push('Email cannot contain . after @')

    }
    else if(!email.value.endsWith('@gmail.com')){
    errorMsg.push('Email must ends with @gmail.com')
    }
}

let validateUsername = (username,errorMsg) =>{
    if(username.value === ""){
        errorMsg.push('Username Required')
    }
    else if(username.value.length < 6){
        errorMsg.push('Username length must be more than equal to 6')
    }
}

let validatePassword = (password,errorMsg) =>{
    if(password.value === ""){
        errorMsg.push('Password Required')
    }
    else if(password.value.length < 8){
        errorMsg.push('Password length must more than equal to 8')
    }
}

let validateCpassword = (cpassword,errorMsg,password) =>{
    if(cpassword.value === ""){
        errorMsg.push('Confirm Password Required')
    }
    else if(cpassword.value !== password.value){
        errorMsg.push('Wrong Password')
    }
}

let validateDob = (dob,errorMsg) => {
    if(dob.value === ""){
        errorMsg.push('Date of Birth are required')
    }
}

let validateNationality = (nationality,errorMsg) =>{
    if(nationality.value === ""){
        errorMsg.push("Nationality required")
    }
}

let validateAgreement = (agree,errorMsg)=>{
    if(!agree.checked){
        errorMsg.push("Must agree to term and conditions")
    }
    
}