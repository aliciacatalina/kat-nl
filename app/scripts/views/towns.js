/*global KatNl, Backbone, JST*/

KatNl.Views = KatNl.Views || {};

(function () {
    'use strict';

    KatNl.Views.Towns = Backbone.View.extend({

        el: '#kat-app',

        template: JST['app/scripts/templates/towns.ejs'],

        events: {},

        initialize: function () {
            this.render();
            this.listenTo(this.collection, 'sync', this.addAllTowns);
            this.collection.fetch();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addTown: function (town) {
          var view = new KatNl.Views.Town({ model: town });
	        this.$('ul').append(view.render().el);
        },

        addAllTowns: function () {
          this.collection.each(this.addTown, this);
        }

    });

})();
