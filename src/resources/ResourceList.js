import {MainResource} from './MainResource';

export class ResourceList{

    constructor(){
        this.resources = [];
        this.resources.push(new MainResource());
    }

    get list(){
        return this.resources;
    }
}