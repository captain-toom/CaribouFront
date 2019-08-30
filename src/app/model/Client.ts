export class Client {
    id: number;
    nom: string;
    mail: string;
    mdp: string;
    photo: Blob;
    constructor() { }
    public set setNom(nom: string) {
        this.nom = nom;
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
