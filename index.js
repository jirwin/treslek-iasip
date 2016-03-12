var Iasip = function() {
  this.commands = ['iasip'];
  this.usage = {
    echo: 'Returns a url for a title card for the provided text.'
  };
};

var iasipUrl = 'http://alexanderlozada.com/iasip/?';

Iasip.prototype.iasip = function(bot, to, from, msg, callback) {
  bot.say(to, iasipUrl + new Buffer(msg).toString('base64'));
  callback();
};


exports.Plugin = Iasip;
