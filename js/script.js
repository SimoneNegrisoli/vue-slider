
/*
Descrizione:
Partendo dal markup fornito, implementare un carousel con Vue.
Bonus:
Al click su una thumb, visualizzare in grande l'immagine corrispondente


netx mi prendo index poi ogni click index ++ faccio un active slide (:src'slide[activeSlide].image) mentre per le immagini laterali ne imposto una vuota e faccio un ciclo for v-for='(slide,index) in slides' e img :src='slide.image e se l'indice è ugale all'indice della foto visualizzata allora avro una classe active sulle immagini a lato

- inizializzo vue
- 2 variabili in data:
    - array slides
    - active slide (index dello slide visualizzato)
- visualizzare in html active slide
- v for per le slide
- implementare funzioni next e prev

bonus
aggiungere il click al thumbs utilizzando index per farla visualizzare
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            slides: [
                {
                image: "img/01.webp",
                title: "Marvel's Spiderman Miles Morale",
                text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                image: "img/02.webp",
                title: "Ratchet & Clank: Rift Apart",
                text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                image: "img/03.webp",
                title: "Fortnite",
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                image: "img/04.webp",
                title: "Stray",
                text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                image: "img/05.webp",
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],
            activeSlide: 0
        };
    },
  methods: {    
    plus(){
        this.activeSlide++
        // if(activeSlide === activeSlide.length){
        //     this.activeSlide = 0
        // }
    },
    less(){
        this.activeSlide--
    }
  },
}).mount("#app");
