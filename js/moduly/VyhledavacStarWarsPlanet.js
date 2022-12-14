'use strict';


export class VyhledavacStarWarsPlanet{
    constructor(){

        this.inputElement = document.querySelector("#input");
        this.buttonElement = document.querySelector("#vyhledat-tlacitko");
        this.vypis = document.querySelector("#vypis");

        this._obsluhaTlacitka();
        this.kontrola();
    }
    _obsluhaTlacitka(){
        this.buttonElement.onclick = () => {
            try{
                if(this.inputElement.value === "")
                    throw new Error("Prázdný input");
                this._odeslatPozadavek(this.inputElement.value);
            }
            catch(err){
                console.log(err);
            }
        };
    }
    _odeslatPozadavek(text){
        console.log(text);
    }
    kontrola(){
        console.log(this.inputElement);
        console.log(this.buttonElement);
        console.log(this.vypis);
    }
}