"use strict";

import inquirer                               from 'inquirer';

import {writeConf}                            from './utils';
import {askQuestions as askQuestionsFields}   from './fields';

const TRANSPORT_JSON_PATH = __dirname + "/../answers/transport.json";
const QUESTIONS = [
  {
    type: 'input',
    name: 'host',
    message: 'SMTP address:'
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

/**
 * getTransportConf - description
 *
 * @private
 * @param  {type} answers description
 * @return {type}         description
 */
function getTransportConf(answers) {
  return {
    host: answers.host,
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587,
    auth: {
      user: answers.user,
      pass: answers.pass
    },
    tls: {
      ciphers:'SSLv3'
    },
    debug: true
  };
}


/**
 * askQuestions - description
 *
 * @param  {type} cb description
 * @return {type}    description
 */
function askQuestions(cb) {
  inquirer.prompt(QUESTIONS)
    .then( function (answers) {
      let transportConf = getTransportConf(answers);
      //console.log('utils', utils)
      //console.log('writeConf', writeConf)
      writeConf(transportConf, TRANSPORT_JSON_PATH, function cb() {
        // kick off the questions of email Fields
        askQuestionsFields();
      });
    });
}

export {
  askQuestions
};
