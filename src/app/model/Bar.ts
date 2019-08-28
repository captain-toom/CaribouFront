export class Bar{
    id:number;
    nom : String ;
    mdp : String ;
    nomGerant : String ;
    tel : String  ;
    mail : String ;
    capacitemax :number;
    photo: Blob;

    constructor() { }
    public set setNom(nom: string) {
        this.nom = nom;
    }
    public set setNomgerant(nomGerant: string) {
        this.nomGerant = nomGerant;
    }
    public set setTel(tel: string) {
        this.tel = tel;
    }
    public set setCapacitemex(capacitemax: number) {
        this.capacitemax = capacitemax;
    }
    public set setMail(mail: string) {
        this.mail = mail;
    }
    public set setMdp(mdp: string) {
        this.mdp = mdp;
    }
    public set setPhoto(photo: Blob) {
        this.photo = photo;
    }
}