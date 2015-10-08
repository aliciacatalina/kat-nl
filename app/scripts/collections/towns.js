/*global KatNl, Backbone*/

KatNl.Collections = KatNl.Collections || {};

(function () {
    'use strict';

    KatNl.Collections.Towns = Backbone.Collection.extend({
        url: 'scripts/data/towns.json',
        initialize: function(){
          this.model = KatNl.Models.Town,
          console.log("Data initialized");
        }

    });

})();
