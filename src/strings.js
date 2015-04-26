module.exports = {
    keyword: {
        error: 'error'
    },
    core: {
        router: {
            registered: 'Resource registered: ',
            serving: 'Serving route ',
            start: 'Server started in http://'
        }
    },
    resource: {
        main: {
            log: {
                referrer: "User's referrer is: "
            }
        },
        parent: {
            response: {
                error: {
                    message: 'Operation not implemented'
                }
            }
        }
    },
    business: {
        search: {
            platform: {
                web: 'Site',
                mobile: 'Mobile',
                legacy: 'Legacy',
                notSet: 'Not set'
            },
            response: {
                codeNotSent: 'Any code was informed'
            },
            request: {
                lines: 'Requesting line(s): ',
                orders: 'Requesting orders(s): ',
                all: 'Requesting all lines',
                samples: 'Requesting samples'
            }
        }
    },
    dataaccess: {
        bus: {
            searching: 'Searching for: ',
            results: ' results',
            total: 'Total ',
            blankLine: 'indefinido',
            blankSense: 'desconhecido'
        },
        itinerary: {
            searching: 'Searching for local data for line itinerary: ',
            requesting: 'Requesting from: ',
            stored: 'Data stored successfully.'
        },
        log: {
            reading: 'Reading log: ',
            totalLines: 'Total lines: '
        },
        server: {
            jsonError: 'JSON response error.',
            mock: {
                fill: 'Filling mock file',
                create: 'Creating mock file'
            }
        },
        all: {
            request: {
                ok: '(200) Request OK.',
                e302: '(302) Server moved temporarily.',
                e404: '(404) Not found.',
                e503: '(503) Server unavailable.',
                default: 'An error ocurred.'
            }
        }
    },
    provider: {
        data: {
            start: "Starting data provider..."
        },
        rest: {
            start: "Starting the server..."
        }
    },
    analytics: {
        event: {
            restHit: 'REST+Hit'
        },
        label: {
            rest: 'REST',
            busCode: 'Bus Code'
        }
    }

};