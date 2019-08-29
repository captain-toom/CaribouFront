export class ImageData{
    id:Number;
    name:String;
    pic:any;
    type:String;
    client_id:number;



    constructor() { }


    public set setId(id: Number) {
        this.id = id;
    }
    public set setNom(name: string) {
        this.name = name;
    }
    public set setPic(pic:any ) {
        this.pic = pic;
    }
    public set setType(type: string) {
        this.type = type;
    }
    public set setClient_id(client_id: number) {
        this.client_id = client_id;
    }
}