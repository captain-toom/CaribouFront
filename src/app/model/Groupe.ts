export class Groupe{
    id:number;
    nom : String ;
    mdp : String ;
    description : String  ;
    mail : String ;
    cachet :number;
    photo: Blob;
    son: Blob;
    video: Blob;

    constructor() { }
    public set setNom(nom: string) {
        this.nom = nom;
    }
    public set setDescription(description: string) {
        this.description = description;
    }
    public set setCachet(cachet: number) {
        this.cachet = cachet;
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
    public set setSon(son: Blob) {
        this.son = son;
    }
    public set setVideo(video: Blob) {
        this.video = video;
    }
    public set setId(id : number) {
        this.id = id;
    }
    
}