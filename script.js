const cards = document.querySelector(".cards");

// array modal
const profilWilders = [
  {
    firstname: "Anne",
    photo:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/photo_portrait.png",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla"
  },

];


function createCard ({firstname, photo, name, age, lastjob, newjob, description}) {  


    const cardWilder = document.createElement("div");
    cardWilder.classList.add("card");
    cards.appendChild(cardWilder);

    const firstNameWilder = document.createElement("h3");
    firstNameWilder.innerHTML= firstname;
    firstNameWilder.classList.add("firstname-title");
    cardWilder.appendChild(firstNameWilder);

    const photoWilder = document.createElement("div");
    photoWilder.style.background = `url(${photo})`;
    photoWilder.classList.add("photo");
    cardWilder.appendChild(photoWilder);

    const nameWilder = document.createElement("div");
    nameWilder.innerHTML=name;
    nameWilder.classList.add("name");
    cardWilder.appendChild(nameWilder);

    const ageWilder =document.createElement("div");
    ageWilder.classList.add("age");
    ageWilder.innerHTML = age;
    cardWilder.appendChild(ageWilder);

    const lastJobWilder  = document.createElement("div");
    lastJobWilder.classList.add("last-job");
    lastJobWilder.innerHTML=lastjob;
    cardWilder.appendChild(lastJobWilder);

    const newJobWilder = document.createElement("div");
    newJobWilder.classList.add("new-job");
    newJobWilder.innerHTML=newjob;
    cardWilder.appendChild(newJobWilder);

    const descriptionWilder = document.createElement("div");
    descriptionWilder.classList.add("description");
    descriptionWilder.innerHTML=description;
    cardWilder.appendChild(descriptionWilder);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Linkedin";
    cardWilder.appendChild(cardButton);

}
//loop to set presentation cards
for (let i=0; i < profilWilders.length; i++) {
    
    createCard(profilWilders[i]);

}

//handling cards

let images = document.querySelectorAll(".img-grid"); 
const card = document.querySelector(".card")
const closeBtn = document.querySelector("#close-btn");

//when image is clicked, modal appears
 
document.querySelectorAll("img").forEach((img) =>{
  img.addEventListener("click", (event) => {
    img.classList.add("card");
    card.style.display = "block";
})
}

)

//when button is clicked, modal disappears
closeBtn.addEventListener("click", function(e){
  if(e.target === closeBtn){
    card.style.display="none";  
  }
})

//if modal is opened we can also click anywhere to hide it
document.body.addEventListener('click',function(e){
  if(e.target===card){
  card.style.display = "none"; 
  }
})

//when modal is a block, background should be transparent 








const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});


