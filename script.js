
let provEl = document.getElementById("prov-el");
let buttEl = document.getElementById("butt-el");

let myArr = [
    "L'oiseau sur le baobab ne doit pas oublier qu'il aporté des lunettes.", 
    "La chenille ne porte pas de lunettes quand elle boit l'eau, c'est a dire que ...",
    "Qui a fais mieux pour la colombie que ... shakira, voila meme un grand joueur",
    "Oh do you do BOBO , Oh do you do",
    "Avec tes grosses fesses on dirait hippopotame, ketmil dolton botswangaise...",
    "Avec ta tete on dirais phacochere",
    "le crocodile n'attend pas que le gorille accouche pour ...."
];


function getProv() {
  
    let randomIndex = Math.floor( Math.random() * 7)
   provEl.textContent =  myArr[randomIndex]

}

buttEl.addEventListener('click', getProv)

getProv() 


