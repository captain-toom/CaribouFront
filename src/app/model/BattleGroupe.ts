


export class BattleGroupe{
    date: Date;
    description: string;
    nom: string;
    visible_client: boolean;
    cachetmax: number;
    nbgroupes: number;
    prix: number;
    bar_id: number;
    genre_id: number;
    

    constructor(

    ){}

    
    public set setNom(nom : string) {
        this.nom = nom;
    }

    public set setDate(date : Date) {
        this.date = date;
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

    
    public set setBar_id(bar_id : number) {
        this.bar_id = bar_id;
    }
    
    public set setGenre_id(genre_id : number) {
        this.genre_id = genre_id;
    }
}