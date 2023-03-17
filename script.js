

// Modal
const cards = document.querySelector(".cards-desktop");
console.log(cards);

// array modal
const profilWilders = [
  {
    firstname: "Val",
    photo:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/photo_portrait.png",
    name: "Val Agostini",
    age:"33 ans",
    lastjob:"Ebeniste",
    newjob:"Trouver du travail à la sortie de formation",
    description:"Parisienne au grand coeur, adoptée dans ma tendre enfance, j'aime les bons repas entre amis, à table!",
    linkedin:"linkedin",
    },
  {
    firstname: "Mohamed",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Mohamed Ait Amar",
    age:"27 ans",
    lastjob:"Auto-entrepreneur",
    newjob:"Développeur Web Full-Stack",
    description:"Je suis un fashionboy, ma casquette est toujours assortie à ma veste, je suis aussi passionnée des voitures.",
    linkedin:"linkedin",
  },
  {
    firstname: "Romain",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Romain Constant",
    age:"41 ans",
    lastjob:"Manager",
    newjob:"Developpeur Front-end",
    description:"Il a un côté sympathique, seulement on le voit toujours de face, nous dit ce jeune amateur de bière. Son plus grand secret: Il travaillait aux pompes funèbres",
    linkedin:"linkedin",
  },
  {
    firstname: "Alexandre",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Alexandre Delbarre",
    age:"21 ans",
    lastjob:"Cuisinier",
    newjob:"Développeur Web",
    description:"Ce Fan de chausson Vador nous dit: Pour trouver la rose de sa vie, il faut cueillir la plus belle du jardin et ne plus jamais changer d’avis.",
    linkedin:"linkedin",
  },
  {
   firstname: "Jocelyn",
    photo:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/photo_portrait.png",
    name: "Jocelyn Delbarre",
    age:"37 ans",
    lastjob:"Clerc d'Huissier",
    newjob:"Développeur Web",
    description:"Pour connaitre le sens du vent il faut mettre son doigt dans le cul d'une poule !!!",
    linkedin:"linkedin",},
  {
    firstname: "Tessa",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Fondeur Tessa",
    age:"25 ans",
    lastjob:"Freelance ",
    newjob:"Développeur Web Front-end",
    description:"citation: Le plus lourd fardeau, c'est d'exister sans vivre Victor Hugo. Petit secret: Je jouais à la DS sous mes draps après le coucher ! Dédicace à Papa et Maman ♥",
    linkedin:"linkedin",
  },
  {
    firstname: "Hugo",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Hugo Hanocq",
    age:"21 ans",
    lastjob:"Modeleur 3D",
    newjob:"Développeur Web ",
    description:"Le fromage, miaaaaaam nous dit Hugo",
    linkedin:"linkedin",
  },
  {
    firstname: "Ambre",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Ambre Henno",
    age:"22 ans",
    lastjob:"Arrêt des études",
    newjob:"Développeuse Web ou UI/UX Designer",
    description:"citation:Toujours voir le positif dans le négatif. Son péché mignon: les muffins au chocolat!",
    linkedin:"linkedin",
  },
  {
    firstname: "Khouloud",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Khouloud Belkir",
    age:"30 ans",
    lastjob:"Prof d'anglais",
    newjob:"Développeur Web Full-Stack",
    description: "Citation: Apprendre à s'aimer soi-même, c'est le début d'une grande histoire d'amour qui va durer toute la vie. Oscar Wilde. Son péché mignon: les chewing-gum" ,
    linkedin:"linkedin",
  },
  {
    firstname: "Anne",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"Citation:Aziz! Lumière dans le film Le cinquième élément de Luc besson. Mon péché mignon: Le gateau Opéra",
    linkedin:"linkedin",
  },
  {
    firstname: "Florent",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Florent Marin",
    age:"27 ans",
    lastjob:"Assitant Monteur",
    newjob:"Développeur Web",
    description:"citation:J'ai assez de vices pour faire du bricolages par Rohff. Sa passion: les playlist rnb dans la voiture.",
    linkedin:"linkedin",
  },
  {
    firstname: "Michael",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Michael McGrath",
    age:"31 ans",
    lastjob:"Chargé e-commerce",
    newjob:"A good job and good life",
    description:"Son péché mignon: manger trop de bonbon. Son grand secret: ne sait pas faire de division à grands chiffres",
    linkedin:"linkedin",
  },
  {
    firstname: "Sacha",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Sacha Loumachi",
    age:"25 ans",
    lastjob:"Serveur",
    newjob:"Un Métier Passionnant",
    description:"Citation: Faut pas commencer à jouer avec mes couilles hein ! Son péché mignon: RMC découvert et son secret: sosie français de Barack Obama",
    linkedin:"linkedin",
  },
  {
    firstname: "Rudy",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Rudy Plessis",
    age:"29 ans",
    lastjob:"Développeur Java EE",
    newjob:"Développeur Web Full-Stack",
    description:"citation:T'es pas l'pingouin qui glisse le plus loin. Ce cousin éloigné de Jim Carrey aime les lasagnes",
    linkedin:"linkedin",
  },
  {
    firstname: "Alexandre",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "alexandre Rohde Ferreira",
    age:"21 ans",
    lastjob:"Monteur de Pc",
    newjob:"Monter sa boîte de Dev",
    description:"cication: Pierre qui roule n'amasse pas mousse. Son péché mignon: les MonCheri",
    linkedin:"linkedin",},
  {
    firstname: "Anthony",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anthony Sénéchal",
    age:"30 ans",
    lastjob:"Cariste",
    newjob:"Développeur Web",
    description:"citation: Okay, Let's go! Son péché mignon: Le welsh bourgeois",
    linkedin:"linkedin",
  },
  {
    firstname: "Marie",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Marie Vangrevelynghe",
    age:"29 ans",
    lastjob:"Gérante, Programmeuse Python",
    newjob:"CyberSecurity Engineer 👨‍💻",
    description:"citation: Hier est l'histoire, demain est un mystère, aujourd'hui est un cadeau. par Eleanor Roosevelt (Et pas Maître Oogway, bande de fous :P ). Son secret: J'ai été championne départementale d'athlétisme en saut en longueur. (Île de France)",
    linkedin:"linkedin",
  },
  {
    firstname: "Marzouk",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Marzouk Yahia",
    age:"27 ans",
    lastjob:"Technicien Fibre optique",
    newjob:"Développeur Web",
    description:"citation: Doucement mais surement. ",
    linkedin:"linkedin",
  },
  {
    firstname: "Alexandre",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Alexandre Rouzière",
    age:"31 ans",
    lastjob:"Agent Immobilier",
    newjob:"Développeur Web",
    description:"Citation: Quand on veut, on peut. Et son péché mignon: les crêpes.",
    linkedin:"linkedin",
  },
  {
    firstname: "Jade",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Jade",
    age:"25 ans",
    lastjob:"Communication",
    newjob:"Développeur Web",
    description:"blablabla",
    linkedin:"linkedin",
  },
  {
    firstname: "Imène",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Imène",
    age:"30 ans",
    lastjob:"",
    newjob:"",
    description:"blablabla",
    linkedin:"linkedin",
  },
  {
    firstname: "Thomas",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Anne Marchasson",
    age:"32 ans",
    lastjob:"Infographiste",
    newjob:"Développeur Web Front-end",
    description:"blablabla",
    linkedin:"linkedin",
  },
  {
    firstname: "Fantine",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Fantine Rudent",
    age:"30 ans",
    lastjob:"Educatrice jeunes enfents",
    newjob:"Créer un projet qui aide les gens",
    description:" Citation: Quand nous arrivons à la fin de nous-mêmes, nous arrivons au commencement de Dieu. Billy Graham. Son péché mignon: les bonbons qui piquent.",
    linkedin:"linkedin",
  },
    {
    firstname: "Félicien",
    photo:"https://tse2.mm.bing.net/th?id=OIP.cbrr9tKCTHyHU1OzNHxemQHaHa&pid=Api&P=0",
    name: "Félicien Renaud",
    age:"28 ans",
    lastjob:"",
    newjob:"Student Manager ",
    description:"blablabla",
    linkedin:"https://www.linkedin.com/in/felicienrenaud/",
  },

];

// copy  item array in modal card 
function createCard ({firstname, photo, name, age, lastjob, newjob, description, linkedin}) {  


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
  

    const linkedinLink = document.createElement("a");
    linkedinLink.classList.add("card-button");
    linkedinLink.href = linkedin;
    cardWilder.appendChild(linkedinLink);

    

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


