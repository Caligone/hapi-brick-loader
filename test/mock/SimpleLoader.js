// $lab:coverage:off$
'use strict';

const Loader = require('../../index');

class SimpleLoader extends Loader {

  constructor () {
    super(__dirname, '**/*.simple.js');
  }

  apply (server, matches) {
    var simples = [];
    matches.forEach( (m) => {
      var simpleFromFile = require(m);
      simples.push(simpleFromFile);
    });
    server.expose('simples', simples);
    return Promise.resolve(simples);
  }

}

module.exports = SimpleLoader;
// $lab:coverage:on$
