// const formEl=document.querySelector(".form-section");

// console.log(formEl);
import axios from "axios";
import { validemail,validfirstName,validlastName,validpassword,validphone } from "../utils/validator.js";

const regsterBtn=document.querySelector("#register-btn");

regsterBtn.addEventListener('click',async(e)=>{
    
    e.preventDefault();
    const firstname=document.querySelector("#firstname").value.trim();
    const lastname=document.querySelector("#lastname").value.trim();
    const email=document.querySelector("#email").value.trim();
    const password=document.querySelector("#password").value.trim();
    const confrimPassword=document.querySelector("#confrim-Password").value.trim();
    const phone_no=document.querySelector("#phone").value.trim();
    const errorEl=document.querySelector("#error-section");
    console.log(firstname,lastname,email,password,confrimPassword,phone_no);
    
    
    errorEl.textContent=""

    if(!firstname || !lastname || !email || !password ||!confrimPassword ||!phone_no){
        errorEl.textContent=`Please fill out the missing fields`
        return;
    }

    if(!validfirstName(firstname)){
        errorEl.textContent=`please fill with valid firstname`
        return;
    }
    if(!validlastName(lastname)){
        errorEl.textContent=`please fill with valid lastname`
        return;
    }
    if(!validemail(email)){
        errorEl.textContent=`please fill with valid Email`
        return;
    }
    if(!validpassword(password)){
        errorEl.textContent=`password range [6-15] atleast one charectar, one number, one special charectar`
        return;
    }

    if (!validphone(phone_no)){
        errorEl.textContent=`please fill with valid Phone Number`
        return;
    }

    if(password !== confrimPassword){
        errorEl.textContent=`password should match with confrim password`
        return ;
    }

    const data={
        firstname,
        lastname,
        email,
        password,
        phone_no
    }
    // errorEl.textContent=`All good`
    // await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/user/signup`,{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(data)
    // }).then(res=>console.log(res.json()))
    // .then(result=>console.log(result))
    // .catch((error)=>{console.log("Error:",error)})

    try {
        const response = await axios.post('/api/v1/user/signup',data);
        console.log(response.data);
        localStorage.setItem("Token",response.data.token)
    } catch (error) {
        const message=error?.response?.data.message;
        message ? errorEl.textContent=error.response.data.message: ""
        console.error(error);
    }
})