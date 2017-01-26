// $lab:coverage:off$
'use strict';

class Server {
  expose (key, value) {
    this[key] = value;
  }
}

module.exports = Server;
// $lab:coverage:on$
