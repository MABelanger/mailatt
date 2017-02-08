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
    message: 'SMTP host:'
  },
  {
    type: 'input',
    name: 'user',
    message: 'username:'
  },
  {
    type: 'input',
    name: 'pass',
    message: 'password:'
  }
];

function writeTransport(transport) {
  let transportJson = JSON.stringify(transport, null, '  ');
  let path = __dirname + "/../answers/transport.json";

  fs.writeFile(path, transportJson, function(err) {
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
