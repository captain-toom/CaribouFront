
import { Groupe } from './Groupe';

export class Vote{

    groupe : String;
    nbVote:number; 
    constructor() { }


    public set setGroupe(groupe: String) {
        this.groupe = groupe;
    }
    public set setNbVotes(nbVote: number) {
        this.nbVote = nbVote;
    }

    
    
}