
import { Genre } from './Genre';

export class Recherche{
    nom: string;
    datemax: Date;
    datemin: Date;
    cachetmax: number;
    cachetmin: number;
    capacitemax: number;
    capacitemin: number;
    genre: Genre = new Genre();

    constructor(
        
    ){}

    
    public set setNom(nom : string) {
        this.nom = nom;
    }

    public set setCachetmax(cachetmax : number) {
        this.cachetmax = cachetmax;
    }
    
    public set setCachetmin(cachetmin : number) {
        this.cachetmin = cachetmin;
    }
    
    public set setCapacitemax(capacitemax : number) {
        this.capacitemax = capacitemax;
    }

    public set setCapacitemin(capacitemin : number) {
        this.capacitemin = capacitemin;
    }

    public set setGenre(genre : Genre) {
        this.genre = genre;
    }
}