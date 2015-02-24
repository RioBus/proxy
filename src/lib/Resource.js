let route = '/';

export class Resource{

    getRoute(){
        return route;
    }

    get(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }

    post(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }

    put(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }

    delete(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }
}

