

export class Recherche{
    nom: string;
    bar:string;
    datemax: Date;
    datemin: Date;
    cachetmax: number;
    cachetmin: number;
    capacitemax: number;
    capacitemin: number;
    genre: string;

    constructor(

    ){}

    
    public set setNom(nom : string) {
        this.nom = nom;
    }

    
    public set setBar(bar : string) {
        this.bar = bar;
    }
    

    public set setCachetmax(cachetmax : number) {
       this.cachetmax = cachetmax;
    }
    
    public set setCachetmin(cachetmin : number) {
         this.cachetmin = cachetmin;
    }

    public set setDatemax(datemax : Date) {
        this.datemax = datemax;
     }
     
     public set setDatemin(datemin : Date) {
          this.datemin = datemin;
     }
    
    public set setCapacitemax(capacitemax : number) {
        this.capacitemax = capacitemax;
    }

    public set setCapacitemin(capacitemin : number) {
        this.capacitemin = capacitemin;
    }

    public set setGenre(genre : string) {
        this.genre = genre;
    }
}