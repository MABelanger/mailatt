"use strict";

import inquirer             from 'inquirer';
import fs                   from 'fs';

let emailFields = {
  TO : null,
  REPLY_TO: null,
  FROM : null,
  SUBJECT : null,
  HTML: null
}

let questions = [
  {
    type: 'input',
    name: 'TO',
    message: 'to:'
  },
  {
    type: 'input',
    name: 'REPLY_TO',
    message: 'reply To:'
  },
  {
    type: 'input',
    name: 'FROM',
    message: 'from:'
  },
  {
    type: 'input',
    name: 'SUBJECT',
    message: 'subject:'
  },
  {
    type: 'input',
    name: 'HTML',
    message: 'html:'
  }
];

function writeTransport(emailFields) {
  let emailFieldsJson = JSON.stringify(emailFields, null, '  ')
  fs.writeFile("./dist/config/answers/email_fields.json", emailFieldsJson, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
inquirer.prompt(questions)
  .then( function (answers) {
    writeTransport(answers);
  });
