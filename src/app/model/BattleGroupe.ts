import { Genre } from './Genre';
import { Bar } from './Bar';



export class BattleGroupe{
    id : number;
    dateEvent: Date;
    description: string;
    nom: string;
    visible_client: boolean;
    cachetmax: number;
    nbgroupes: number;
    prix: number;
    bar: Bar;
    genre: Genre;
    

    constructor(

    ){}

    
    public set setNom(nom : string) {
        this.nom = nom;
    }

    public set setDateEvent(dateEvent : Date) {
        this.dateEvent = dateEvent;
    }

    public set setDescription(description : string) {
        this.description = description;
    }

    
    public set setCachetmax(cachetmax : number) {
        this.cachetmax = cachetmax;
    }

    public set setNbgroupes(nbgroupes : number) {
        this.nbgroupes = nbgroupes;
    }

    public set setPrix(prix : number) {
        this.prix = prix;
    }

    
    public set setBar_id(bar : Bar) {
        this.bar = bar;
    }
    
    public set setGenre_id(genre : Genre) {
        this.genre = genre;
    }
}