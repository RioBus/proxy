'use strict';
const request = require('request-promise');

var optionsObj = {
    method: 'GET',
    simple: true,
    resolveWithFullResponse: true,
    json: true
}
/**
 * Creates a new synchronized HttpRequest
 * @class {Http}
 */
class Http {
    
    /**
     * Makes requests through Options object
     * @param {Object} options - Options object
     * @returns {Promise}
     */
    static request(options) {
        var data = JSON.parse(JSON.stringify(optionsObj));
        Object.keys(options).forEach( (key) => {
            data[key] = options[key];
        });
        return request(data);
    }

    /**
     * Makes GET request
     * @param {string} host - Host URL
     * @param {Object} data - Data to be sent (Optional)
     * @param {Object} headers - Headers to be set (Optional)
     * @returns {Promise}
     */
    static get(host, data, headers) {
        return Http.request({ uri: host, body: data || {}, headers: headers || {} });
    }

    /**
     * Makes POST request
     * @param {string} host - Host URL
     * @param {Object} data - Data to be sent
     * @param {Object} headers - Headers to be set (Optional)
     * @returns {Promise}
     */
    static post(host, data, headers) {
        return Http.request({ method: 'POST', uri: host, body: data, headers: headers || {} });
    }

    /**
     * Makes POST request
     * @param {string} host - Host URL
     * @param {Object} data - Data to be sent
     * @returns {Promise}
     */
    static postForm(host, data) {
        return request.post({ url: host, formData: data });
    }

    /**
     * Makes PUT request
     * @param {string} host - Host URL
     * @param {Object} data - Data to be sent
     * @param {Object} headers - Headers to be set (Optional)
     * @returns {Promise}
     */
    static put(host, data, headers) {
        return Http.request({ method: 'PUT', uri: host, body: data, headers: headers || {} });
    }

    /**
     * Makes DELETE request
     * @param {String} host - Host URL
     * @param {Object} data - Data to be sent (Optional)
     * @param {Object} headers - Headers to be set (Optional)
     * @returns {Promise}
     */
    static delete(host, data, headers) {
        return Http.request({ method: 'DELETE', uri: host, body: data || {}, headers: headers || {} });
    }
}
module.exports = Http;
