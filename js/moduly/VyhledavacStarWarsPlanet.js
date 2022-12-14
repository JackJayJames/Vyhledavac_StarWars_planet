'use strict';


export class VyhledavacStarWarsPlanet{
    constructor(){

        this.inputElement = document.querySelector("#input");
        this.buttonElement = document.querySelector("#vyhledat-tlacitko");
        this.vypis = document.querySelector("#vypis");

        this.kontrola();
    }
    kontrola(){
        console.log(this.inputElement);
        console.log(this.buttonElement);
        console.log(this.vypis);
    }
}