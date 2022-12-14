'use strict';

import { Ajax } from "./wrapper.js";

export class VyhledavacStarWarsPlanet{
    constructor(){

        this.inputElement = document.querySelector("#input");
        this.buttonElement = document.querySelector("#vyhledat-tlacitko");
        this.vypis = document.querySelector("#vypis");

        this._obsluhaTlacitka();
        this.kontrola();
    }
    _obsluhaTlacitka(){ //Tatooine  search=${text}
        this.buttonElement.onclick = () => {
            this._odeslatPozadavek(this.inputElement.value);
        };
    }
    _odeslatPozadavek(text){
        Ajax.get(`https://swapi.dev/api/planets/?search=${text}`, { pocet: 5 })
            .then((data) => {
                if(data["count"] > 0)
                    this._vypsatData(data["results"]);
                else
                    this.vypis.innerHTML = `"${text}" Nenalezeno`;
            })
            .catch((err) => {
                console.log(err)
            });
    }
    _vypsatData(planety){
        this.vypis.innerHTML = "";
        for(const planeta of planety){
            const planeta_container = this._vytvoritPlanetaContainer(planeta);
            this.vypis.appendChild(planeta_container);
        }
    }
    _vytvoritPlanetaContainer(planeta){
        const div = document.createElement("div");
    }
    kontrola(){
        console.log(this.inputElement);
        console.log(this.buttonElement);
        console.log(this.vypis);
    }
}