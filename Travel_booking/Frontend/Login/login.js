import axios from 'axios';

import { validemail,validpassword } from '../utils/validator';
const formEl=document.querySelector("#form-ele")
formEl.addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    const email=document.getElementById("email").value.trim()
    const password=document.getElementById("password").value.trim()
    
    const errorEl=document.getElementById("error-msg");
    errorEl.textContent=""

    if (!email || !password){
        errorEl.textContent="Missing Field Required"
        return 
    }

    if (!validemail(email)){
        errorEl.textContent="Invalid Email"
        return 
    }

    if (!validpassword(password)){
        errorEl.textContent="password range [6-15] atleast one charectar, one number, one special charectar"
    }


    const data={
        email,
        password
    }
    
    try {
        const res=await axios.post('/api/v1/user/login',data)
        console.log(res.data)
    } catch (error) {
        const message=error?.response?.data?.message
        message ? errorEl.textContent=message: ""
        console.error();
    }

})