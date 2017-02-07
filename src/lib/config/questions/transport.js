"use strict";

import inquirer             from 'inquirer';
import fs                   from 'fs';

let transport = {
  host: null,
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587,
  auth: {
    user: null,
    pass: null
  },
  tls: {
    ciphers:'SSLv3'
  },
  debug: true
};

let questions = [
  {
    type: 'input',
    name: 'host',
    message: 'What\'s your smtp host:'
  },
  {
    type: 'input',
    name: 'user',
    message: 'What\'s your username:'
  },
  {
    type: 'input',
    name: 'pass',
    message: 'What\'s your password:'
  }
];

function writeTransport(transport) {
  let transportJson = JSON.stringify(transport, null, '  ')
  fs.writeFile("./dist/config/answers/transport.json", transportJson, function(err) {
    if(err) {
      return console.log(err);
    }
    require('./emailFields'); // TODO :. alternative
  });
}
inquirer.prompt(questions)
  .then( function (answers) {
    transport.host = answers.host;
    transport.auth.user = answers.user;
    transport.auth.pass = answers.pass;

    writeTransport(transport);
  });
