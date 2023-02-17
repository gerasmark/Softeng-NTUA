const constructURL = require('../lib/constructURL');
const chai = require('chai')
const expect = chai.expect;
const exec = require("child_process");
const { spawn } = require('child_process');
const { execSync } = require('child_process');

describe('Healthcheck Output', function() {
  it('Should return the correct output when running the shell command "se2222 healthcheck"', function() {
    const output = execSync('se2222 healthcheck').toString();

    expect(output).to.include('OK');
  });
});
