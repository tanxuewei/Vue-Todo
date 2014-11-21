require.config({
    baseUrl: '/js/',
    paths: {
        'jQuery': 'lib/1.11.1/jquery',
        'underscore': 'lib/1.7.0/underscore',
        'backbone': 'lib/1.1.2/backbone'，
        'backbone.localStorage': 'lib/backbone.localStorage'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        }，
        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});