export class Product {
    id: number;
    name :string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number ,name: string, description='', price=0, imageUrl='https://github.com/manthanank/slash/blob/master/src/app/Slash-logo.png?raw=true'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl
    }
}
