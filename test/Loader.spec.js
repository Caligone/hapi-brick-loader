// $lab:coverage:off$
'use strict';

var path = require('path');
var Code = require('code');
var Lab = require('lab');
var lab = Lab.script();
var expect = Code.expect;

var Loader = require('../index');
var SimpleLoaderMock = require('./mock/SimpleLoader.js');
var ServerMock = require('./mock/Server');

lab.suite('Loader:class', () => {

  lab.test('it fails if try to instanciate the abstract Loader', (endTest) => {
    let loader = null;
    try {
      loader = new Loader();
      Code.fail('The exception should be raise before this');
    } catch (err) {
      expect(err).to.be.an.error(Error, 'Cannot build a Loader abstract instance !');
    }
    expect(loader).to.be.null();
    endTest();
  });

  lab.test('it properly create a SimpleLoader instance', (endTest) => {
    let loader = new SimpleLoaderMock();
    expect(loader._pattern).to.be.equal('**/*.simple.js');
    expect(loader._dirname).to.be.equal(path.join(__dirname, 'mock'));
    let server = new ServerMock();
    loader.process(server);
    expect(server.simples).to.be.an.array();
    expect(server.simples.length).to.be.equal(2);
    expect(server.simples).to.only.include(['nested', 'root']);
    endTest();
  });
});

module.exports.lab = lab;
// $lab:coverage:on$
