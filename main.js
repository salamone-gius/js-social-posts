const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed:
// - aggancio l'elemento HTML su cui andrò a stampare i post;
const postsContainer = document.querySelector(".posts-list");

// - scorrendo tutto l'array posts con ciclo definito...
for (let i = 0; i < posts.length; i++) {
    // BONUS.2 salvo nella variabile nameSurname il nome e il cognome di ogni autore come 2 elementi di un array;
    let nameSurname = posts[i].author.name.split(" ");
    console.log("nameSurname =", nameSurname);
    // - salvo nella variabile lettersOfName le lettere del nome di ogni autore come elementi di un array;
    let lettersOfName = nameSurname[0].split("");
    console.log("lettersOfName =", lettersOfName);
    // - salvo nella variabile lettersOfSurname le lettere del cognome di ogni autore come elementi di un array;
    let lettersOfSurname = nameSurname[1].split("");
    console.log("lettersOfSurname =", lettersOfSurname);
    // - salvo nella variabile initials la prima lettera del nome concatenata alla prima lettera del cognome di ogni autore;
    let initials = `${lettersOfName[0]} ${lettersOfSurname[0]}`;
    console.log("initials =", initials);
    // BONUS.1 Salvo il valore created dell'elemento/oggetto dell'array posts nella variabile "date";
    let usDate = posts[i].created; 
    // porcheria delle porcherie per invertire la data;
    let italianDate = (`${usDate[8]}${usDate[9]}${usDate[7]}${usDate[5]}${usDate[6]}${usDate[4]}${usDate[0]}${usDate[1]}${usDate[2]}${usDate[3]}`);
    // - aggiungo dinamicamente ogni elemento (post) dell'array posts all'HTML;
    postsContainer.innerHTML += 
    // - importo TUTTA la struttura HTML dei post;
    // - inserisco il VALORE della relativa CHIAVE richiamandolo dall'array posts con template literal.
        `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.image}" alt="${initials}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${italianDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
    ;
}


// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo:
// - aggancio l'elemento HTML che scatenerà l'evento;
let likeButton = document.querySelectorAll(".js-like-button");

// - inizializzo un array vuoto;
let liked = [];

// - aggancio l'elemento che voglio che cambi al click (contatore)...
let counter = document.getElementById("like-counter-1");

// - scorrendo PER tutti gli elementi presi con querySelectorAll (NodeList)...
for (let i = 0; i < likeButton.length; i++) {
    // - ...aggiungo ad OGNI elemento un evento "click". Al click...
    likeButton[i].addEventListener("click", 
        function() {
            // - ...SE l'elemento ha la classe like-button--liked...
            if (likeButton[i].classList.contains("like-button--liked")) {
                // - ...gliela tolgo (BONUS.3)...
                likeButton[i].classList.remove("like-button--liked");
                // - ...tolgo 1 al valore della chiave "likes" e lo stampo (BONUS.3);
                counter.innerHTML = posts[i].likes -= 1;
            // - ...ALTRIMENTI...
            } else {
                // - ...gliel'aggiungo...
                likeButton[i].classList.add("like-button--liked");
                // - ...gli rimetto il cursor: pointer...
                likeButton[i].style.cursor = "pointer";
                // - ...salvo in un secondo array gli id dei post ai quali è stato messo il like...
                liked.push(posts[i].id);
                // - ...aggiungo 1 al valore della chiave "likes" e lo stampo (BONUS.3);
                counter.innerHTML = posts[i].likes += 1;
                console.log(posts[i].likes);
            }
        }
    );
}
console.log(liked);

// BONUS
// 1. (WITH PORCHERY BUT DONE) Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. (DONE) Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.