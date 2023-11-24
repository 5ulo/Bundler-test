// a limited 'each' loop.
// usage: {{#foreach items offset="1" limit="5"}} : items 1 thru 6
// usage: {{#foreach items limit="10"}} : items 0 thru 9
// usage: {{#foreach items offset="3"}} : items 3 thru context.length
// defaults are offset=0, limit=-1 // all

// 'use strict';
var Handlebars = require('handlebars'); // because https://stackoverflow.com/questions/34823274/custom-handlebars-each-helper-with-index

module.exports = function(context, options) {

    var ret = "",
        offset = parseInt(options.hash.offset) || 0,
        limit = parseInt(options.hash.limit) || -1,
        i = (offset < context.length) ? offset : 0;
    
    var data; // because https://stackoverflow.com/questions/34823274/custom-handlebars-each-helper-with-index
    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }

    if (limit === -1) {
      var j = context.length;
    } else {
      var j = ((limit + offset) < context.length) ? (limit + offset) : context.length;
    }
    
    var result = [ ];
    for(i,j; i<j; i++) {
      if (data) {
        data.index = i;
        data.first  = (i == 0) ? true : false;
        // data.last   = (i == (context.length-1)) ? true : false;
        data.last   = (i == (j-1)) ? true : false;
      }
      result.push(options.fn(context[i], {data: data}));
    }
    return result.join('');
};