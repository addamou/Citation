//variable citations
let quotes = ["L’oiseau sur le baobab ne doit pas oublié qu’il a porté des lunettes.", 
    "Mobutu a eu le Léopard mais Bobo aura le crocodile.", 
    "J’ai déjà nommé ton frère ministre des sports je vais pas lui donner en plus le ministère des finances.",
    "Jack Brel hein! Mais c’est mon chanteur préféré! Faut me téléchargé ça sur itunes!",
    "La rivière qui dort a oublié d’allumer son réveil.",
    "Un chien a bien 4 pattes mais il ne peut pas suivre deux chemins a la fois.",
    "Celui qui mange ne mange pas que dans le mangeoir.",
    "J'aimerais qu'on retienne Jamais content. Je trouvais ça génial, revendicatif. Du rap avant l'heure. Mais Allô maman bobo, ça a fait plaisir à ma mère et puis ça m'a mis en couverture de L'Express.",
    "La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
    "L'homme vole, l'oiseau. Quand l'oiseau vole il fait son nie et quand l'homme vole, il nie le fait."]; 
//variable auteurs
let auteurs = ["Président Bobo",
    "Président Bobo",
    "Président Bobo",
    "Président Bobo",
    "Président Bobo",
    "Président Bobo",
    "Président Bobo",
    "Alain Souchon",
    "Coluche", 
    "Adama Dahico"];
    
let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let auteur = document.getElementById('auteur');

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = randomQuote;

    var randomAuteur = auteurs[Math.floor(Math.random() * auteurs.length)]
    auteur.innerHTML = randomAuteur;
})


