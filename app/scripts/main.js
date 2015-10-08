/*global KatNl, $*/


window.KatNl = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
      new this.Views.Towns({
        collection: new this.Collections.Towns()
      });
    }
};

$(document).ready(function () {
    'use strict';
    KatNl.init();
});
