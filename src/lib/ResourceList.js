export class ResourceList{

    constructor(){
        this.resources = [];
    }

    registerResource(resource){
        this.resources.push(resource);
    }

    get list(){
        return this.resources;
    }
}