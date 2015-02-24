import {MainResource} from './main';

export class ResourceList{

    constructor(){
        this.resources = [];
        this.resources.push(new MainResource());
    }

    get list(){
        return this.resources;
    }

}
