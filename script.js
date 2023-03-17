


// Modal
const cards = document.querySelector(".cards");

// array modal
const profilWilders = [
  {
    firstname: "Val",
    photo:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/photo_portrait.png",
    name: "Val Agostini",
    age:"33 ans",
    lastjob:"Ebeniste",
    newjob:"Trouver du travail à la sortie de formation",
    description:"Parisienne au grand coeur, adoptée dans ma tendre enfance, j'aime les bons repas entre amis, à table!"
  },
  {
    firstname: "Mohamed",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Mohamed Ait Amar",
    age:"27 ans",
    lastjob:"Auto-entrepreneur",
    newjob:"Développeur Web Full-Stack",
    description:"Je suis un fashionboy, ma casquette est toujours assortie à ma veste, je suis aussi passionnée des voitures."
  },
  {
    firstname: "Romain",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Romain Constant",
    age:"41 ans",
    lastjob:"Manager",
    newjob:"Developpeur Front-end",
    description:"Il a un côté sympathique, seulement on le voit toujours de face, nous dit ce jeune amateur de bière. Son plus grand secret: Il travaillait aux pompes funèbres"
  },
  {
    firstname: "Alexandre",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Alexandre Delbarre",
    age:"21 ans",
    lastjob:"Cuisinier",
    newjob:"Développeur Web",
    description:"Ce Fan de chausson Vador nous dit: Pour trouver la rose de sa vie, il faut cueillir la plus belle du jardin et ne plus jamais changer d’avis."
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
    firstname: " Julie ",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Julie Smith",
    age:"32 ans",
    lastjob:"Joueuse de Pétanque",
    newjob:"Développeur Web Front-end",
    description:"Je suis une grande curieuse, j'écoute aux portes et n'hésite pas à dénoncer mes voisins. Mon chat se nomme Gaspard et c'est un petit ingrat"
  },

];

// copy  item array in modal card 
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
//let cards = document.querySelectorAll("img");
//let images = document.querySelectorAll(".img-grid"); 
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


