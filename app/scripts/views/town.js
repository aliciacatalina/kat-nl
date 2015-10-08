/*global KatNl, Backbone, JST*/

KatNl.Views = KatNl.Views || {};

(function () {
    'use strict';

    KatNl.Views.Town = Backbone.View.extend({

        tagName: 'li',

        template: JST['app/scripts/templates/town.ejs'],


        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log('rennder');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
