export class Resource{

    route(){
        return '/';
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