/*global KatNl, Backbone*/

KatNl.Models = KatNl.Models || {};

(function () {
    'use strict';

    KatNl.Models.Town = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
