'use strict';

var request = require('request'),
    _ = require('underscore');

function Client(apiKey, options) {
    var self = this;

    options = options || {};
    self.apiKey = apiKey;
    self.server = options.server || 'http://api.thingspeak.com';
}


Client.prototype.addPoint = function (data, callback) {
    var self = this;
   
    var field = [],
        url = self.server + '/update/';

     request.post({url: url, form: data, headers: {'X-THINGSPEAKAPIKEY': self.apiKey}}, callback);

    
};




exports.Client = Client;