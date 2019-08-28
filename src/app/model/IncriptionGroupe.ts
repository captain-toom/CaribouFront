import { BattleGroupe } from './BattleGroupe';
import { Groupe } from './Groupe';

export class InscriptionGroupe{
    event: BattleGroupe =new BattleGroupe();
    groupe: Groupe = new Groupe();
    refused: boolean;

    constructor(){}

    
    public set setEvent(event : BattleGroupe) {
        this.event = event;
    }

    public set setGroupe(groupe : Groupe) {
        this.groupe = groupe;
    }

    
    public set setRefused(refused : boolean) {
        this.refused = refused;
    }
    
    
    
}