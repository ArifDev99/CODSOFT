const validfirstName=(firstname)=>{
    const nameregx=new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/)
    return nameregx.test(firstname)
}
const validlastName=(lastname)=>{
    const nameregx=new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/)
    return nameregx.test(lastname)
}

const validemail=(email)=>{
    const emailregx=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    return emailregx.test(email)
}

const validpassword=(password)=>{
    const passregx=new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/)
    return passregx.test(password)

}

const validphone=(phone)=>{
    const phoneregx=new RegExp(/^((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/)
    return phoneregx.test(phone)
}

export {validfirstName,validlastName,validemail,validpassword,validphone}