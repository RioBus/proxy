module.exports = {
    resource: {
        main: {
            log: {
                referrer: "User's referer is: "
            }
        }
    },
    business: {
        main: {
            platform: {
                web: 'Site',
                mobile: 'Mobile',
                legacy: 'Legacy',
                notSet: 'Not set'
            },
            response: {
                codeNotSent: 'Any code was informed'
            }
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