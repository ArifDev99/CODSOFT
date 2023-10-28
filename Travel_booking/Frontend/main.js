
// const authtoken=localStorage.getItem("Token");
import axios, { all } from "axios";

const registerBtn=document.getElementById("register-btn");


registerBtn.addEventListener("click",()=>{
    window.location.href=`http://127.0.0.1:5173/Register/register.html`
})

document.addEventListener("DOMContentLoaded", async()=>{
    
    var allTour=[];
    try {
        const response= await axios.get("/tour");
        const result=response?.data?.allTour
        // console.log(result)
        allTour=[...result]
        console.log(allTour);        
    } catch (error) {
        console.error(error);
    }

    // allTour.map((Tour,index)=>(makeSlides(Tour)))
    const slides=document.getElementById("slides");
    var cardSection=document.createElement("div")
    cardSection.classList.add("card-section");

    allTour.forEach((tour,index)=>{
        const card= makeCard(tour);
        if((index+1)%3===0){
            cardSection.appendChild(card);
            slides.appendChild(cardSection)
            cardSection=document.createElement("div")
            cardSection.classList.add("card-section")
        }else{
            cardSection.appendChild(card)
        }

    })
    slides.appendChild(cardSection)
})


function makeCard(tour){
    
    
    const card=document.createElement('div');
    card.classList.add("card");

    const image=document.createElement('img');
    image.classList.add("card-img");
    image.src='./Imeges/Background.jpg'


    const cardContent=document.createElement("div");
    cardContent.classList.add("card-content")

    const cardHeading=document.createElement("h3");
    cardHeading.classList.add("card-heading")
    cardHeading.textContent=tour.name
    cardContent.appendChild(cardHeading);

    const cardDesc=document.createElement("p");
    cardDesc.classList.add("card-desc");
    cardDesc.textContent=tour.description

    const personRate=document.createElement("span");
    personRate.textContent=`Cost: ${tour.costPrice}rs per Person`
    
    const Days=document.createElement("span");
    Days.textContent=`Total ${tour.tourDays} Days`
    
    cardContent.appendChild(cardDesc);
    cardContent.appendChild(personRate)
    cardContent.appendChild(Days);

    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent="Know More"
    cardContent.appendChild(btn);

    card.appendChild(image);
    card.appendChild(cardContent)

    // const slides=document.getElementById("slides");
    // slides.appendChild(card)
    return card
}