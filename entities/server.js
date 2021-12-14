module.exports = {
    name: {
        validate: {
            type: 'string',
            maxCharLength: 50,
            minCharLength: 3,
            required: true,
            ascii: true,
        },
        sanitize: {
            escape: '',
            blacklist: '',
            trim: ' '
        }
    },
    hostname: {
        validate: {
            type: 'string',
            minCharLength: 3,
            required: true,
            ascii: true,
            startWith: [
                'https://',
                'http://'
            ],
        },
        sanitize: {
            trim: ' ',
            rtrim: '/',
        }        
    },
    port: {
        validate: {
            type: 'number',
            min: 0,
            max: 10000,
            required: true,
        }
    },
    server_type: {
        validate: {
            type: 'string',
            maxCharLength: 50,
            minCharLength: 1,
        },
        sanitize: {
            trim: ' '
        }        
    }
}