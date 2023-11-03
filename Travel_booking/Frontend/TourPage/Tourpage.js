import axios from "axios";
// import {jwt} from "jsonwebtoken";
import jwt from 'jsonwebtoken';

document.addEventListener("DOMContentLoaded",async()=>{

    try {
        const qurey=window.location.search
        const tourid=qurey.split("=")[1]
        console.log(tourid);
        const response =await axios.get(`/tour/page/${tourid}`)
        const result=response.data.tour
        console.log(result);


        const headingEl=document.querySelector(".heading")
        headingEl.textContent=result.name;

        const descEl=document.querySelector(".desc");
        descEl.textContent=result.description

        const daysEl=document.querySelector(".days");
        daysEl.textContent=`${result.tourDays} Days need to complete Tour`
        const ulEL=document.querySelector("#location-list")
        const locationList=result.locations;
        locationList.forEach(val => {
            const liEl=document.createElement("li")
            liEl.classList.add("list")
            liEl.textContent=val
            ulEL.appendChild(liEl);
        });


        const nameEl=document.querySelector(".name")
        nameEl.textContent=result.name
        const costEl=document.querySelector("#tour-cost");
        costEl.innerHTML=`Rs: ${result.costPrice}  inr`
        
        
    } catch (error) {
        console.log(error);
    }
    
    const bookBtn=document.querySelector("#book-btn");
    bookBtn.addEventListener("click",handelBook)
})


function handelBook(){
    const Token=localStorage.getItem("Token");
    
    if(!Token){
        window.location.href='http://localhost:5173/Login/login.html'
    }
    else{
        try {
            
            let newtoken=Token;
            console.log(newtoken);
            const secret=import.meta.env.VITE_JWT_SECRET;
            console.log(secret);
            const decodedToken=jwt.verify(newtoken.toString(),secret.toString())
            console.log(decodedToken);
        } catch (error) {
            console.error(error);
        }
    }
}